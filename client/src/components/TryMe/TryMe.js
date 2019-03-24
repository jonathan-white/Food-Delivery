import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from  'react-router-dom';
import MenuItem from '../MenuItem';
import './TryMe.css';

const IMAGES = `https://storage.googleapis.com/${process.env.REACT_APP_FIREBASE_STORAGE}`;

class TryMeConatiner extends Component {
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
    const selectedLoc = 'Boston Market';
    const location = locations ? locations.filter(r => r.title === selectedLoc)[0] : null;

    const handleClick = (event) => {
      event.preventDefault();
      this.props.history.push(`/locations/${location._id}`);
    }

    return (
      <TryMe
        establishment={location && location}
        title={location && location.title}
        eta={location && location.delivery.eta}
        delivery={location && location.delivery.description}
        handleClick={handleClick}
      />
    )
  }
};
TryMeConatiner.contextTypes = {
  store: PropTypes.object
};

const TryMe = (props) => (
  <div className="try-me" onClick={props.handleClick}>
    <div className="section-separator"></div>
    <h1 className="section-title">Try Me Free</h1>
    <div className="restaurant-details">Free Delivery on orders of $15 or more!</div>
    <hr className="section-hr" />
    <MenuItem source={`${IMAGES}/Boston-Market/create-your-own-bowl.png`} alt="" size="large-image" />
    <div className="restaurant-title">{props.title}</div>
    <div className="restaurant-details">{props.eta} min <span className="dot"></span> {props.delivery}</div>
    <div className="section-separator"></div>
  </div>
);

export default withRouter(TryMeConatiner);
