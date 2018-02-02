import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Battle.css';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

class Battle extends React.Component {
  state = {
    playerOneName: null,
    playerOneImage: null,
    playerTwoName: null,
    playerTwoImage: null,
  };

  handleSubmit = (id, username) => {
    this.setState({
      [`${id}Name`]: username,
      [`${id}Image`]: `https://github.com/${username}.png?size=200`,
    });
  };

  handleReset = (id) => {
    this.setState({
      [`${id}Name`]: null,
      [`${id}Image`]: null,
    });
  };

  render() {
    const {
      playerOneName, playerTwoName, playerOneImage, playerTwoImage,
    } = this.state;

    const { match } = this.props;

    return (
      <div>
        <div className={styles.battle}>
          {!playerOneName && (
            <PlayerInput id="playerOne" label="Player One" onSubmit={this.handleSubmit} />
          )}

          {playerOneImage && (
            <PlayerPreview avatar={playerOneImage} username={playerOneName}>
              <button className={styles.resetButton} onClick={() => this.handleReset('playerOne')}>
                Reset
              </button>
            </PlayerPreview>
          )}

          {!playerTwoName && (
            <PlayerInput id="playerTwo" label="Player Two" onSubmit={this.handleSubmit} />
          )}

          {playerTwoImage && (
            <PlayerPreview avatar={playerTwoImage} username={playerTwoName}>
              <button className={styles.resetButton} onClick={() => this.handleReset('playerTwo')}>
                Reset
              </button>
            </PlayerPreview>
          )}
        </div>
        {playerOneImage &&
          playerTwoImage && (
            <Link
              href={`${match.url}/results`}
              className={styles.battleLink}
              to={{
                pathname: `${match.url}/results`,
                search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`,
              }}
            >
              Battle!
            </Link>
          )}
      </div>
    );
  }
}

export default Battle;
