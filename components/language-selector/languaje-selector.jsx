import React from 'react';

const LanguajeSelector = ({
  languages, languageSelected, setLanguage, expanded, toggleExpanded,
}) => {
  const notSelectedLanguages = languages.filter((lang) => lang !== languageSelected);

  return (

    <div id="languaje-selector" className="dropdown">
      <button className="btn dropdown-toggle text-uppercase py-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded={expanded} onClick={() => toggleExpanded()}>
        {languageSelected}
      </button>
      <div className={`dropdown-menu${expanded ? ' show' : ''}`} show aria-labelledby="dropdownMenuButton">

        {notSelectedLanguages.map((lang) => (
          <button
            className="text-uppercase dropdown-item"
            type="button"
            alt={`select ${lang} language`}
            onClick={() => setLanguage(lang)}
            onKeyDown={() => setLanguage(lang)}
            key={lang}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguajeSelector;
