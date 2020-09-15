import React from 'react';
import logo from './logo.svg';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import styles from './App.module.scss';

function App() {
  //hamurger toggle state
  const [isOpen, setOpen] = useState(false)

  return (
    <div className={styles.App}>
      <header className={styles.appHeader}>
      <Hamburger toggled={isOpen} toggle={setOpen} />
        {/* <img src={logo} className="appLogo" alt="logo" /> */}
        <h1 className={styles.title}>Testing Title style</h1>
        <p className={styles.subtitle}>Testing Subtitle style</p>
        <p className={styles.text}>Testing text style</p>
        <a
          className={styles.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



      {/* <link href="dist/hamburgers.css" rel="stylesheet"/>
      <button className={styles.hamburger hamburger--spring} type="button">
      <span className={styles.hamburgerBox}>
        <span className={styles.hamburgerInner}></span>
      </span>
    </button> */}