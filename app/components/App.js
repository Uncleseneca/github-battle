import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Popular from './Popular';
import styles from './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.container}>
          <Popular />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
