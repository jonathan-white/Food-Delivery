import React, { Component } from 'react';
import Header from '../../Header/';
import Footer from '../../Footer/';
import MenuItem from '../../MenuItem';
import API from '../../../utils/API';
import './MenuItemPage.css';

class Location extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuItem: null,
      error: null
    }
  }

  componentDidMount() {
    API.getMenuItem(this.props.locationId)
      .then(res => {
        this.setState({menuItem: res.data[0]});
      })
      .catch(err => this.setState({error: err}))
  }

  render() {
    const { menuItem } = this.state;
    return (
      <div>
        <Header label={`${menuItem && menuItem.title}`} />
        <div>{menuItem.title}</div>
        <Footer />
      </div>
    )
  }
}

export default Location;
