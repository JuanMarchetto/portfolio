import React from 'react';

const Footer = ({ darkTheme, footer }) => (
  <footer
    className={`
      container ${darkTheme && 'darkTheme'}
      position-fixed p-2
    `}
  >
    <div className="row">
      {footer.social.map(({ icon, link, alt }) => <a className="col d-flex justify-content-center" href={link}><img src={icon} alt={alt} /></a>)}
    </div>
  </footer>
);

export default Footer;
