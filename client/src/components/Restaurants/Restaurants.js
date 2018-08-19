import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Restaurants.css';
// import restaurants from '../../constants/restaurants.json';
import RestaurantPreview from '../RestaurantPreview/';

class Restaurants extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  };

  componentWillUnmount() {
    this.unsubscribe();
  };

  render() {
    const { store } = this.context;
    const state = store.getState();

    const restaurants = state.locations.list;

    return (
      <div className="restaurants">
        <h1 className="section-title">All Restaurants</h1>
        <hr className="section-hr" />
        {restaurants &&
          restaurants.map(r => <RestaurantPreview key={r.title} establishment={r} />)
        }
      </div>
    )
  }
};
Restaurants.contextTypes = {
  store: PropTypes.object
};

export default Restaurants;
