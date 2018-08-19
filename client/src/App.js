import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import * as routes from './constants/routes';
import FoodPage from './components/_pages/FoodPage/';
import DrinksPage from './components/_pages/DrinksPage/';
import OrdersPage from './components/_pages/OrdersPage/';
import LandingPage from './components/_pages/LandingPage/';
import LoginPage from './components/_pages/LoginPage';

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
        </Switch>
      </Router>
    );
  }
}

export default App;
