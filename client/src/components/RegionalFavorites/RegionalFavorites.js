import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from  'react-router-dom';
import MenuItem from '../MenuItem';
import './RegionalFavorites.css';

const IMAGES = `https://storage.googleapis.com/${process.env.REACT_APP_FIREBASE_STORAGE}`;

class RegionalFavoritesContainer extends Component {
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
    const locations = state.locations.list;
    const selectedLoc = 'Rusty Bucket Restaurant and Tavern';
    const location = locations ? locations.filter(r => r.title === selectedLoc)[0] : null;

    const handleClick = (event) => {
      event.preventDefault();
      console.log('User wants to view:', location.title);
      this.props.history.push(`/locations/${selectedLoc}`);
    }

    return (
      <RegionalFavorites
        title={location && location.title}
        eta={location && location.delivery.eta}
        delivery={location && location.delivery.description}
        handleClick={handleClick}
      />
    )
  }
};
RegionalFavoritesContainer.contextTypes = {
  store: PropTypes.object
};

const RegionalFavorites = (props) => (
  <div className="regional-favorites" onClick={props.handleClick}>
    <h1 className="section-title">Cleveland Favorites</h1>
    <hr className="section-hr" />
    <MenuItem source={`${IMAGES}/Rusty-Bucket/chicken-wings.jpg`} alt="" size="large-image" />
    <div className="restaurant-title">{props.title}</div>
    <div className="restaurant-details">{props.eta} min <span className="dot"></span> {props.delivery}</div>
  </div>
);

export default withRouter(RegionalFavoritesContainer);
