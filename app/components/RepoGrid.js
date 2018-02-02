import React from 'react';
import T from 'prop-types';
import styles from './RepoGrid.css';

const RepoGrid = ({ repos }) => (
  <ul className={styles.popularList}>
    {repos.map((repo, i) => (
      <li key={repo.name} className={styles.popularItem}>
        <span className={styles.popularRank}>#{i + 1} </span>
        <div className={styles.details}>
          <img
            className={styles.avatar}
            src={repo.owner.avatar_url}
            alt={`Avatar for ${repo.owner.login}`}
          />
          <a href={repo.html_url}>{repo.name}</a>
          <span>@{repo.owner.login}</span>
          <span>{repo.stargazers_count} stars</span>
        </div>
      </li>
    ))}
  </ul>
);

RepoGrid.propTypes = {
  repos: T.array.isRequired,
};

export default RepoGrid;
