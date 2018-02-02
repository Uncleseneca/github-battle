import React from 'react';
import queryString from 'query-string';
import api from '../utils/api';
import styles from './Results.css';
import ResultsCard from './ResultsCard';
import Loading from './Loading';

class Results extends React.Component {
  state = {
    winner: null,
    loser: null,
    error: null,
    loading: true,
  };

  componentDidMount() {
    const players = queryString.parse(this.props.location.search);
    api.battle([players.playerOneName, players.playerTwoName]).then((results) => {
      if (results === null) {
        return this.setState({
          error: 'Looks like there was error. Check both users names',
          loading: false,
        });
      }
      return this.setState({
        winner: results[0],
        loser: results[1],
        loading: false,
        error: null,
      });
    });
  }

  render() {
    const {
      winner, loser, error, loading,
    } = this.state;

    if (loading === true) {
      return <Loading />;
    }

    if (error !== null) {
      return <p>{error}</p>;
    }

    return (
      <div className={styles.results}>
        <div className={styles.column}>
          <b className={styles.hero}>Winner</b>
          <ResultsCard score={winner.score} profile={winner.profile} />
        </div>
        <div className={styles.column}>
          <b className={styles.hero}>Loser</b>
          <ResultsCard score={loser.score} profile={loser.profile} />
        </div>
      </div>
    );
  }
}

export default Results;
