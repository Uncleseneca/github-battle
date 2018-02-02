import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.css';

const Nav = () => (
  <nav className={styles.nav}>
    <NavLink exact activeClassName={styles.active} className={styles.link} to="/">
      Home
    </NavLink>
    <NavLink activeClassName={styles.active} className={styles.link} to="/battle">
      Battle
    </NavLink>
    <NavLink activeClassName={styles.active} className={styles.link} to="/popular">
      Popular
    </NavLink>
  </nav>
);

export default Nav;
