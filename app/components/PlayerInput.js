import React from 'react';
import T from 'prop-types';
import styles from './PlayerInput.css';

class PlayerInput extends React.Component {
  state = {
    username: '',
  };

  handleChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.props.id, this.state.username);
  };

  render() {
    const { id, label } = this.props;
    const { username } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          className={styles.input}
          type="text"
          placeholder="Github username"
          autoComplete="off"
          value={username}
          onChange={this.handleChange}
        />
        <button className={styles.submitButton} type="submit" disabled={!username}>
          Submit
        </button>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  id: T.string.isRequired,
  label: T.string.isRequired,
  onSubmit: T.func.isRequired,
};

export default PlayerInput;
