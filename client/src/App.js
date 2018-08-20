import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import * as routes from './constants/routes';
import FoodPage from './components/_pages/FoodPage/';
import DrinksPage from './components/_pages/DrinksPage/';
import OrdersPage from './components/_pages/OrdersPage/';
import LandingPage from './components/_pages/LandingPage/';
import LoginPage from './components/_pages/LoginPage';
import Location from './components/_pages/Location';
import Category from './components/_pages/Category';
import MenuItemPage from './components/_pages/MenuItemPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={routes.LANDING} component={() => <LandingPage />} />
          <Route exact path={routes.FOOD} component={() => <FoodPage />} />
          <Route exact path={routes.DRINKS} component={() => <DrinksPage />} />
          <Route exact path={routes.ORDERS} component={() => <OrdersPage />} />
          <Route exact path={routes.LOGIN} component={() => <LoginPage />} />
          <Route exact path={routes.LOCATION} component={(props) =>
            <Location locationId={props.match.params.id} />}
          />
          <Route exact path={routes.MENU_CATEGORY} component={(props) =>
            <Category categoryId={props.match.params.id} />}
          />
          <Route exact path={routes.MENU_ITEM} component={(props) =>
            <MenuItemPage menuItemId={props.match.params.id} />} 
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
