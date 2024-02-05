// components/SliderCards/SliderCards.js
import React from 'react';
import styles from './sliderCards.module.css';

const SliderCards = () => {
  const cardsData = [
    { title: 'Card 1', description: 'Description 1' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 3', description: 'Description 3' },
    // Add more cards as needed
  ];

  return (
    <div className={styles.sliderCards}>
      {cardsData.map((card, index) => (
        <div key={index} className={styles.card}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SliderCards;
