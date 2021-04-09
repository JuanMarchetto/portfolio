import React from 'react';
import ThemeToggle from '../theme-toggle';
import LanguageSelector from '../language-selector';

const Header = ({
  darkTheme,
  setDarkTheme,
  name,
  img,
  languages,
  languageSelected,
  setLanguage,
  expanded,
  toggleExpanded,
}) => (
  <nav
    className={`
      navbar ${darkTheme && 'darkTheme'} container-fluid
    `}
  >
    <div className="col-9 col-md-10 col-xl-11">
      <h1>Portfolio</h1>
      <h3>{name}</h3>
    </div>
    <div className="col-3 col-md-2 col-xl-1">
      <div id="options-container" className="row align-items-center justify-content-center">
        <ThemeToggle darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        {languages.length > 1
          && (
          <LanguageSelector
            languages={languages}
            setLanguage={setLanguage}
            languageSelected={languageSelected}
            expanded={expanded}
            toggleExpanded={toggleExpanded}
          />
          )}
      </div>
      <div className="row">
        <img src={img} alt={name} className="rounded-circle" />
      </div>
    </div>
  </nav>
);

export default Header;
