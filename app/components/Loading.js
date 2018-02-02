import React from 'react';
import T from 'prop-types';
import styles from './Loading.css';

class Loading extends React.Component {
  state = {
    text: this.props.text,
  };

  componentDidMount() {
    const template = `${this.props.text}...`;

    this.interval = window.setInterval(() => {
      if (this.state.text === template) {
        this.setState({ text: this.props.text });
      } else {
        this.setState(prevState => ({
          text: `${prevState.text}.`,
        }));
      }
    }, 200);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return <p className={styles.text}>{this.state.text}</p>;
  }
}

Loading.defaultProps = {
  text: 'Loading',
};

Loading.propTypes = {
  text: T.string,
};

export default Loading;
