import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Address from '../AddressInfo/';
import NewCustomerPromo from '../NewCustomerPromo/';
import Cuisines from '../Cuisines/';
import RegionalFavorites from '../RegionalFavorites/';
import TryMe from '../TryMe/';
import Restaurants from '../Restaurants/';
import './HeroCard.css';

class HeroCard extends Component {
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

    return (
      <div className="hero">
        <Address />
        {state.display.showNewCustomerPromo && <NewCustomerPromo />}
        <Cuisines />
        {state.display.showRegionalFavorites && <RegionalFavorites />}
        {state.display.showTryMe && <TryMe />}
        <Restaurants />
      </div>
    )
  }
};
HeroCard.contextTypes = {
  store: PropTypes.object
};

export default HeroCard;
