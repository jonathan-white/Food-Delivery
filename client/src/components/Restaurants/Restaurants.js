import React from 'react';
import './Restaurants.css';
import restaurants from '../../constants/restaurants.json';
import RestaurantPreview from '../RestaurantPreview/';

const Restaurants = () => (
  <div className="restaurants">
    <h1 className="section-title">All Restaurants</h1>
    <hr className="section-hr" />
    {
      restaurants.map(r => <RestaurantPreview key={r.title} location={r} />)
    }
  </div>
);

export default Restaurants;
