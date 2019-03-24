import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
// import expect from 'expect';
// import deepFreeze from 'deep-freeze';

const login = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_PASSWORD':
      return {
        ...state,
        displayPassword: !state.displayPassword
      }
    case 'UPDATE_EMAIL':
      return {
        ...state,
        credentials: {
          ...state.credentials,
          email: action.email
        }
      }
    case 'UPDATE_PASSWORD':
      return {
        ...state,
        credentials: {
          ...state.credentials,
          password: action.password
        }
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
};

const display = (state = {
  showNewCustomerPromo: true,
  showRegionalFavorites: true,
  showTryMe: true
}, action) => {
  switch (action.type) {
    case 'TOGGLE_NEW_CUSTOMER_PROMO':
      return {
        ...state,
        showNewCustomerPromo: !state.showNewCustomerPromo
      }
    case 'TOGGLE_REGIONAL_FAVORITES':
      return {
        ...state,
        showRegionalFavorites: !state.showRegionalFavorites
      }
    case 'TOGGLE_TRY_ME':
      return {
        ...state,
        showTryMe: !state.showTryMe
      }
    default:
      return state;
  }
};

const locations = (state = [], action) => {
  switch (action.type) {
    case 'GET_LOCATIONS':
      return {
        ...state,
        list: action.list
      }
    case 'FOUND_LOCATIONS':
      return {
        ...state,
        hasList: true
      }
    default:
      return state;
  }
}

const product = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        product: action.product,
        qty: action.qty,
        cost: action.product.price * action.qty
      };
    case 'UPDATE_QUANTITY':
      if(state.product._id !== action.product._id) {
        return state;
      }
      return {
        ...state,
        qty: action.qty,
        cost: action.product.price * action.qty
      };
    default:
      return state;
  }
};

const order = (state = JSON.parse(localStorage.getItem('order')) || [], action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        product(undefined, action)
      ];
    case 'UPDATE_QUANTITY':
      return state.map(t => product(t, action));
    case 'REMOVE_FROM_CART':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

const FoodApp = combineReducers({
  login,
  display,
  locations,
  order
});

ReactDOM.render(
  <Provider store={createStore(FoodApp)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
