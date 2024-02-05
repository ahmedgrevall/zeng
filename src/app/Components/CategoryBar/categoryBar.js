// CategoriesRow.js
import React from 'react';
import styles from './categoryBar.module.css';

const CategoriesRow = () => {
  const categories = ['Stock Video', 'Video Templates', 'Music', 'Sound Effects', 'Graphic Templates', 'Graphics', 'Presentation Templates', 'Photos', 'Fonts', 'Add-ons'];

  return (
    <div className={styles.categoriesRow}>
      {categories.map((category, index) => (
        <div key={index} className={styles.categoryItem}>{category}</div>
      ))}
    </div>
  );
};

export default CategoriesRow;
