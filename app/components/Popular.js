import React from 'react';
import SelectLanguage from './SelectLanguage';
import RepoGrid from './RepoGrid';
import api from '../utils/api';
import Loading from './Loading';

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

class Popular extends React.Component {
  state = {
    repos: null,
    selectedLanguage: 'All',
  };

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage = (lang) => {
    this.setState({ selectedLanguage: lang, repos: null });
    api.fetchPopularRepos(lang).then((repos) => {
      this.setState({ repos });
    });
  };

  render() {
    return (
      <div>
        <SelectLanguage languages={languages} updateLanguage={this.updateLanguage} />
        <div>
          {!this.state.repos ? (
            <Loading text="Downloading" />
          ) : (
            <RepoGrid repos={this.state.repos} />
          )}
        </div>
      </div>
    );
  }
}

export default Popular;
