import React from 'react';
import Helmet from "react-helmet";

import Menu from '../Menu';

import styles from './home.scss'

const Home = () => (
  <div className={styles.homeWrapper}>
    <Helmet title="HOME HOME HOME"/>
    <Menu/>
    <h1 className={styles.title}>Homepage</h1>
  </div>
);

export default Home;
