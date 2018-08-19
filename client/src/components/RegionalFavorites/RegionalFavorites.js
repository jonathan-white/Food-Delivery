import React from 'react';
import MenuItem from '../MenuItem';
import './RegionalFavorites.css';

const RegionalFavorites = () => (
  <div className="regional-favorites">
    <h1 className="section-title">Cleveland Favorites</h1>
    <hr className="section-hr" />
    <MenuItem source="" alt="" size="large-image" />
    <div className="restaurant-title">Rusty Bucket Restaurant and Tavern</div>
    <div className="restaurant-details">49 min <span className="dot"></span> Free delivery</div>
  </div>
);

export default RegionalFavorites;
