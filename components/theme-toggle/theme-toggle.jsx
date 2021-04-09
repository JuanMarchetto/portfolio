import React from 'react';

const ThemeToggle = ({ darkTheme, setDarkTheme }) => (
  <button
    id="theme-toggle"
    label="theme toggle"
    type="button"
    onClick={() => setDarkTheme(!darkTheme)}
    onKeyDown={() => setDarkTheme(!darkTheme)}
    className={`
      rounded-circle
      position-relative
    `}
  />
);

export default ThemeToggle;
