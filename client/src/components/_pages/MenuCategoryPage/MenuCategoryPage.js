import React, { Component } from 'react';
import { withRouter } from  'react-router-dom';
import Header from '../../Header/';
import Footer from '../../Footer/';
import MenuItem from '../../MenuItem';
import API from '../../../utils/API';
import './MenuCategoryPage.css';

class MenuCategory extends Component {
  constructor(props){
    super(props);
    this.state = {
      location: null,
      error: null
    }
  }

  componentDidMount() {
    API.getCategoryItems(this.props.locationId)
      .then(res => {
        this.setState({location: res.data[0]});
      })
      .catch(err => this.setState({error: err}))
  }

  render() {
    const location = this.state.location;
    return (
      <div>
        <Header label={`${location && location.title}`} />
        <div></div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(MenuCategory);
