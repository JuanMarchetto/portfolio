import React from 'react';
import { Description, Carrusel, WorkExperience } from '../sections';

const renderSection = ({
  type, title, content, childs, jobs, maxHeight,
}) => {
  switch (type) {
    case 'description':
      return <Description title={title} content={content} maxHeight={{ maxHeight }} />;
    case 'carrusel':
      return <Carrusel title={title} childs={childs} />;
    case 'work-experience':
      return <WorkExperience title={title} jobs={jobs} />;
    default:
      return content;
  }
};

const Main = ({ darkTheme, sections }) => (
  <main
    className={`
  container-fluid ${darkTheme && 'darkTheme'}
`}
  >
    {sections.map((section) => (
      <section
        className={`row py-2 border-bottom ${section.type}`}
      >
        {renderSection(section)}
      </section>
    ))}
  </main>
);

export default Main;
