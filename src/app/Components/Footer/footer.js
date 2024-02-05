import React from 'react';

import styles from './footer.module.css'; // Import the CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* First Row: Follow Us */}
      <div className={styles.row2}>
        <div className={styles.followUsText}>Follow Us</div>
        <div className={styles.socialIcons}>
          {/* Add your social media icons here */}
          {/* Example: */}
          <a href="https://example.com/facebook" target="_blank" rel="noopener noreferrer">
            <img src="https://w7.pngwing.com/pngs/672/953/png-transparent-grey-youtube-icon-youtube-play-button-computer-icons-youtube-angle-rectangle-triangle.png" alt="Facebook" />
          </a>
          
          {/* Repeat for other social media icons */}
        </div>
        <div className={styles.socialIcons}>
          {/* Add your social media icons here */}
          {/* Example: */}
          <a href="https://example.com/facebook" target="_blank" rel="noopener noreferrer">
            <img src="https://w7.pngwing.com/pngs/672/953/png-transparent-grey-youtube-icon-youtube-play-button-computer-icons-youtube-angle-rectangle-triangle.png" alt="Facebook" />
          </a>
          
          {/* Repeat for other social media icons */}
        </div>
        <div className={styles.socialIcons}>
          {/* Add your social media icons here */}
          {/* Example: */}
          <a href="https://example.com/facebook" target="_blank" rel="noopener noreferrer">
            <img src="https://w7.pngwing.com/pngs/672/953/png-transparent-grey-youtube-icon-youtube-play-button-computer-icons-youtube-angle-rectangle-triangle.png" alt="Facebook" />
          </a>
          
          {/* Repeat for other social media icons */}
        </div>
      </div>

      {/* Second Row: Five Columns */}
      <div className={styles.row}>
        {/* Column 1 */}
        <div className={styles.column}>
          <h3>Internal Links</h3>
          <ul className={styles.internalLinks}>
            <li><a href="/documentaries" className={styles.boldText}>Documentaries</a></li>
            <li><a href="/themes" className={styles.boldText}>Themes</a></li>
            <li><a href="/chrome-casts" className={styles.boldText}>Chrome casts</a></li>
            <li><a href="/enterprise" className={styles.boldText}>Enterprise</a></li>
            <li><a href="/download-chrome" className={styles.boldText}>Download Chrome Browser</a></li>
          </ul>
        </div>
        
        {/* Repeat similar structure for Columns 2-5 */}
        {/* Column 2 */}
        
        <div className={styles.column}>
         
        
        </div>

        {/* Column 3 */}
        <div className={styles.column}>
        <h3>Internal Links</h3>
          <ul className={styles.internalLinks}>
          
            <li><a href="/enterprise" className={styles.boldText}>ChromeOS</a></li>
            <li><a href="/download-chrome" className={styles.boldText}>google Cloud</a></li>
            
            <li><a href="/enterprise" className={styles.boldText}>ChromeOS</a></li>
            <li><a href="/download-chrome" className={styles.boldText}>google Cloud</a></li>
            <li><a href="/enterprise" className={styles.boldText}>ChromeOS</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className={styles.column}>
        <h3>Enterprise</h3>
          <ul className={styles.internalLinks}>
            <li><a href="/documentaries" className={styles.boldText}>Download Chrome Browser</a></li>
            <li><a href="/themes" className={styles.boldText}>Download Chrome Enterprise</a></li>
            <li><a href="/chrome-casts" className={styles.boldText}>Download Chrome Devices</a></li>
            <li><a href="/enterprise" className={styles.boldText}>ChromeOS</a></li>
            <li><a href="/download-chrome" className={styles.boldText}>google Cloud</a></li>
            

          </ul>
        </div>

        {/* Column 5 */}
        <div className={styles.column}>
        <h3>Internal Links</h3>
          <ul className={styles.internalLinks}>
          
            <li><a href="/enterprise" className={styles.boldText}>ChromeOS</a></li>
            <li><a href="/download-chrome" className={styles.boldText}>google Cloud</a></li>
            
            <li><a href="/enterprise" className={styles.boldText}>ChromeOS</a></li>
            <li><a href="/download-chrome" className={styles.boldText}>google Cloud</a></li>
            <li><a href="/enterprise" className={styles.boldText}>ChromeOS</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
