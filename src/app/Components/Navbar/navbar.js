// components/TopNavbar.js
import React from 'react';
import styles from './navbar.module.css';

const TopNavbar = () => {
  return (
    <div className={styles.topNavbar}>
      <div className={styles.logo}>⚙️ZinTools</div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search for Movies, TV Shows, Themes & Cast" />
        <div className={styles.searchIcon}>🔍</div>
      </div>
      <div className={styles.buttons}>
        <button style={{ color: "blue", textDecoration: "none", border: "none", background: "none" }}>Log in</button>
        <button style={{ backgroundColor: "blue", borderRadius: "20px" }}>Signup</button>
      </div>
    </div>
  );
};

export default TopNavbar;