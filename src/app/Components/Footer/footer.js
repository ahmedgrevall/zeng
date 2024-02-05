import React from 'react';

import styles from './footer.module.css'; // Import the CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* First Row: Follow Us */}
      <div className={styles.row}>
        <h2>Follow Us</h2>
        <div className={styles.socialIcons}>
          {/* Add your social media icons here */}
          {/* Example: */}
          <a href="https://example.com/facebook" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook-icon.png" alt="Facebook" />
          </a>
          {/* Repeat for other social media icons */}
        </div>
      </div>

      {/* Second Row: Five Columns */}
      <div className={styles.row}>
        {/* Column 1 */}
        <div className={styles.column}>
          <h3>Column 1</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
        </div>
        
        {/* Repeat similar structure for Columns 2-5 */}
        {/* Column 2 */}
        <div className={styles.column}>
          {/* ... */}
        </div>

        {/* Column 3 */}
        <div className={styles.column}>
          {/* ... */}
        </div>

        {/* Column 4 */}
        <div className={styles.column}>
          {/* ... */}
        </div>

        {/* Column 5 */}
        <div className={styles.column}>
          {/* ... */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
