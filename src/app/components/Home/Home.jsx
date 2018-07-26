import React from 'react';
import Helmet from "react-helmet";

import Menu from '../Menu';

import styles from './home.scss';
const image = 'http://res.cloudinary.com/dewd4pral/image/upload/v1497110592/logo_wei7um.png';

const Home = () => (
  <div className={styles.homeWrapper}>
    <Helmet title="HOME HOME HOME"/>
    <Menu/>
    <img className={styles.imageContainer} src={image} alt="test img"/>

  </div>
);

export default Home;
