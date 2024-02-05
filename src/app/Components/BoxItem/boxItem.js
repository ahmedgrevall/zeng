// BoxItem.js
import React from 'react';
import './BoxItem.css';

const BoxItem = ({ name, description, imageSrc }) => {
  return (
    <div className="card-container">
      <a href="#" className="item tool" ga360location="content_2_buttonLink_5">
        <img className="tool-image" src={imageSrc} alt={name} />
        <h3 className="title">{name}</h3>
        <div className="desc overflow-hidden">
          {description}
        </div>
        <div className="bookmark-icon">
          {/* Updated SVG with fixed size */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              fill="#000000"
              d="M7 2v20l5-5 5 5V2H7zm2 15l-2.5-2.5L4 17V4h10v13h-5z"
            />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default BoxItem;
