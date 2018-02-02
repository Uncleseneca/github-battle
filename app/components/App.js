import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Popular from './Popular';
import Nav from './Nav';
import styles from './App.css';
import Home from './Home';
import Battle from './Battle';
import Results from './Results';

const App = () => (
  <BrowserRouter>
    <div className={styles.container}>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/battle" component={Battle} />
        <Route exact path="/battle/results" component={Results} />
        <Route path="/popular" component={Popular} />
        <Route render={() => <p>Not found!</p>} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
