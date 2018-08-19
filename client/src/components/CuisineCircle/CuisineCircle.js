import React from 'react';
import './CuisineCircle.css';

const CuisineCircle = (props) => (
  <div className="cuisine-item" data-label={props.label}>
    <div className="cuisine-icon">
      <img src={props.image} alt={props.label} />
    </div>
    <div className="cuisine-label">
      {props.label}
    </div>
  </div>
);

export default CuisineCircle;
