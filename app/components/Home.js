import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className={styles.home}>
        <h1>Github battle: battle your friends!</h1>
        <Link className={styles.battleLink} to="/battle">
          Battle!
        </Link>
      </div>
    );
  }
}

export default Home;
