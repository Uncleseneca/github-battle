import React from 'react';
import T from 'prop-types';
import styles from './PlayerPreview.css';

const PlayerPreview = ({ avatar, username, children }) => (
  <div className={styles.playerPreview}>
    <img className={styles.avatar} src={avatar} alt={`Avatar for ${username}`} />
    <h2 className={styles.username}>{username}</h2>
    {children}
  </div>
);

PlayerPreview.defaultProps = {
  children: null,
};

PlayerPreview.propTypes = {
  avatar: T.string.isRequired,
  username: T.string.isRequired,
  children: T.element,
};

export default PlayerPreview;
