import React, { useState } from 'react';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';

const Portfolio = ({ config }) => {
  const [darkTheme, setDarkTheme] = useState(config.darkTheme || false);
  const {
    name, img, sections, footer,
  } = config;
  const languages = Object.keys(sections);
  const [languageSelected, setLanguaje] = useState(languages[0]);
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);
  const changeLanguage = (lang) => { setExpanded(false); setLanguaje(lang); };
  return (
    <>
      <Header
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        name={name}
        img={img}
        languages={languages}
        languageSelected={languageSelected}
        setLanguage={changeLanguage}
        expanded={expanded}
        toggleExpanded={toggleExpanded}
      />
      <Main
        darkTheme={darkTheme}
        sections={sections[languageSelected]}
      />
      <Footer darkTheme={darkTheme} footer={footer} />
    </>
  );
};

export default Portfolio;
