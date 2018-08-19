import React from 'react';
import LargeImage from '../LargeImage/';
import './TryMe.css';

const TryMe = () => (
  <div className="try-me">
    <div className="section-separator"></div>
    <h1 className="section-title">Try Me Free</h1>
    <div className="restaurant-details">Free Delivery on orders of $15 or more!</div>
    <hr className="section-hr" />
    <LargeImage source="" alt="" />
    <div className="restaurant-title">Boston Market</div>
    <div className="restaurant-details">43 min <span className="dot"></span> Free delivery</div>
    <div className="section-separator"></div>
  </div>
);

export default TryMe;
