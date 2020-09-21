import React, { FunctionComponent } from 'react';
import styles from './Nav.module.scss';
import {Link} from 'react-router-dom';

export const Navbar: FunctionComponent = () => {

return  (
<nav className={styles.navbar}>
    <ul className={styles.navbarUl}>
      <li className={styles.navbarLi}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navbarLi}>
        <Link to="/rover_explorer">Rover explorer</Link>
      </li>
      <li className={styles.navbarLi}>
        <Link to="/timeline/opportunity">Opportunity</Link>
      </li>
      <li className={styles.navbarLi}>
        <Link to="/timeline/spirit">Spirit</Link>
      </li>
      <li className={styles.navbarLi}>
        <Link to="/timeline/curiosity">Curiosity</Link>
      </li>
      <li className={styles.navbarLi}>
        <Link to="/timeline/perserverance">Perserverance</Link>
      </li>
    </ul>
  </nav>
);
};

export default Navbar;