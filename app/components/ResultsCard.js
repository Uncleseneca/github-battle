import React from 'react';
import styles from './ResultsCard.css';
import PlayerPreview from './PlayerPreview';

const ResultsCard = ({
  score,
  profile: {
    avatar_url: avatar,
    login: username,
    name,
    location,
    company,
    followers,
    following,
    public_repos: publicRepos,
  },
}) => (
  <article className={styles.resultsCard}>
    <div className={styles.lead}>
      <b className={styles.score}>Score: {score}</b>
      <PlayerPreview avatar={avatar} username={username} />
    </div>
    <div className={styles.details}>
      {name && <span>{name}</span>}
      {location && <span>Location: {location}</span>}
      {company && <span>Company: {company}</span>}
      <span>Followers: {followers}</span>
      <span>Following: {following}</span>
      <span>Public repos: {publicRepos}</span>
    </div>
  </article>
);

export default ResultsCard;
