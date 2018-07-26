import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './menu.scss';

const Menu = () => (
  <div>
    <ul>
      <li>
        <NavLink exact to={'/'} activeClassName={styles.active}>Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.active} to={'/about'}>About</NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.active} to={'/contact'}>Contact</NavLink>
      </li>
    </ul>
  </div>
);

export default Menu;
