import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import styles from './Popular.css';
import Dummy from './Dummy';

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState({ selectedLanguage: lang });
  }

  render() {
    const languages = [
      {
        name: 'All',
        href: '/all',
      },
      {
        name: 'JavaScrtipt',
        href: '/javascrtipt',
      },
      {
        name: 'Ruby',
        href: '/ruby',
      },
      {
        name: 'Java',
        href: '/java',
      },
      {
        name: 'CSS',
        href: '/css',
      },
      {
        name: 'Python',
        href: '/pyton',
      },
    ];
    return (
      <div className={styles.languages}>
        {languages.map(
          lang => (
            <NavLink
              key={lang.name}
              className={styles.language}
              onClick={() => this.updateLanguage(lang.name)}
              to={lang.href}
              activeClassName={styles.languageActive}
            >
              {lang.name}
            </NavLink>
          ),
          this,
        )}
        <div>
          <Route path="/" component={Dummy} />
          <Route path="/css" component={Dummy} />
        </div>
      </div>
    );
  }
}

export default Popular;
