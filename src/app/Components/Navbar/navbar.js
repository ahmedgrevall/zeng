// components/TopNavbar.js
import React from 'react';
import styles from './navbar.module.css';

const TopNavbar = () => {
  return (
    <div className={styles.topNavbar}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." />
        <div className={styles.searchIcon}>🔍</div>
      </div>
      <div className={styles.buttons}>
        <button>Login</button>
        <button>Signup</button>
      </div>
    </div>
  );
};

export default TopNavbar;