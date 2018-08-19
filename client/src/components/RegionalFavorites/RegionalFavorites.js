import React from 'react';
import { withRouter } from  'react-router-dom';
import MenuItem from '../MenuItem';
import './RegionalFavorites.css';

const IMAGES = `https://storage.googleapis.com/${process.env.REACT_APP_FIREBASE_STORAGE}`;

const handleClick = (event) => {
  event.preventDefault();
  console.log('User wants to view:','Rusty Bucket Restaurant and Tavern');
}

const RegionalFavorites = () => (
  <div className="regional-favorites" onClick={handleClick}>
    <h1 className="section-title">Cleveland Favorites</h1>
    <hr className="section-hr" />
    <MenuItem source={`${IMAGES}/Rusty-Bucket/chicken-wings.jpg`} alt="" size="large-image" />
    <div className="restaurant-title">Rusty Bucket Restaurant and Tavern</div>
    <div className="restaurant-details">49 min <span className="dot"></span> Free delivery</div>
  </div>
);

export default withRouter(RegionalFavorites);
