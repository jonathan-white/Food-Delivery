import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Address from '../../AddressInfo/';
import NewCustomerPromo from '../../NewCustomerPromo/';
import Cuisines from '../../Cuisines/';
import RegionalFavorites from '../../RegionalFavorites/';
import TryMe from '../../TryMe/';
import Restaurants from '../../Restaurants/';
import Header from '../../Header/';
import Footer from '../../Footer/';
import API from '../../../utils/API';
import './FoodPage.css';

const FoodPage = () => (
  <div>
    <Header label="Food" />
    <HeroCard />
    <Footer />
  </div>
);

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

    if(!state.locations.hasList){
      const getLocations = () => {
        API.getLocations()
        .then(res => {
          store.dispatch({
            type: 'FOUND_LOCATIONS'
          });
          store.dispatch({
            type: 'GET_LOCATIONS',
            list: res.data
          });
        })
        .catch(err => this.setState({error: err}));
      }
      getLocations();
    }

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

export default FoodPage;
