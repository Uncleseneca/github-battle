import React from 'react';
import { NavLink } from 'react-router-dom';
import T from 'prop-types';
import styles from './SelectLanguage.css';

const SelectLanguage = ({ languages, updateLanguage }) => (
  <div className={styles.languages}>
    {languages.map(lang => (
      <NavLink
        key={lang.name}
        className={styles.language}
        to={lang.href}
        activeClassName={styles.languageActive}
        onClick={(e) => {
          e.preventDefault();
          updateLanguage(lang.name);
        }}
      >
        {lang.name}
      </NavLink>
    ))}
  </div>
);

SelectLanguage.propTypes = {
  languages: T.arrayOf(T.shape({
    name: T.string.isRequired,
    href: T.string.isRequired,
  })).isRequired,
  updateLanguage: T.func.isRequired,
};

export default SelectLanguage;
