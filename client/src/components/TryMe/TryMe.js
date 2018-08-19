import React from 'react';
import { withRouter } from  'react-router-dom';
import MenuItem from '../MenuItem';
import './TryMe.css';

const IMAGES = `https://storage.googleapis.com/${process.env.REACT_APP_FIREBASE_STORAGE}`;

const handleClick = (event) => {
  event.preventDefault();
  console.log('User wants to view:','Boston Market');
}

const TryMe = () => (
  <div className="try-me" onClick={handleClick}>
    <div className="section-separator"></div>
    <h1 className="section-title">Try Me Free</h1>
    <div className="restaurant-details">Free Delivery on orders of $15 or more!</div>
    <hr className="section-hr" />
    <MenuItem source={`${IMAGES}/Boston-Market/create-your-own-bowl.png`} alt="" size="large-image" />
    <div className="restaurant-title">Boston Market</div>
    <div className="restaurant-details">43 min <span className="dot"></span> Free delivery</div>
    <div className="section-separator"></div>
  </div>
);

export default withRouter(TryMe);
