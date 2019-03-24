import React, { Component } from 'react';
import { withRouter } from  'react-router-dom';
import Header from '../../Header/';
import Footer from '../../Footer/';
import MenuItem from '../../MenuItem';
import API from '../../../utils/API';
import './Location.css';

class Location extends Component {
  constructor(props){
    super(props);
    this.state = {
      location: null,
      error: null
    }
  }

  componentDidMount() {
    API.getLocation(this.props.locationId)
      .then(res => {
        this.setState({location: res.data[0]});
      })
      .catch(err => this.setState({error: err}))
  }

  render() {
    const { location } = this.state;

    const handleMenuItemClick = (event,id) => {
      event.preventDefault();
      this.props.history.push(`/menu-items/${id}`);
    }

    const handleMenuCategoryClick = (event,id) => {
      event.preventDefault();
      this.props.history.push(`/menu-categories/${id}`);
    }

    return (
      <div>
        <Header label={`${location && location.title}`} />
        <div className="location-info">
          {location && location.menu.show_preview && (
            <div className="pickup-promo">
              <div className="pickup-promo-title">New! Try Pickup</div>
              <div className="pickup-promo-sub">Skip the line. Pick up on your time.</div>
              <div className="pickup-promo-sub">Your order is ready when you are.</div>
            </div>
          )}
          <div className="delivery-info">
            <div>
              <div className="label-cost-top">Free</div>
              <div className="label-cost-bottom">delivery</div>
            </div>
            {location && location.delivery.eta &&
              (<div>
                <div className="label-cost-top">{location.delivery.eta}</div>
                <div className="label-cost-bottom">minutes</div>
              </div>)
            }
            {location && location.delivery.distance &&
              (<div>
                <div className="label-cost-top">{location.delivery.distance.toFixed(1)}</div>
                <div className="label-cost-bottom">miles</div>
              </div>)
            }
            <div className="can-toggle demo-rebrand-1">
              <input id="d" type="checkbox" />
              <label htmlFor="d">
                <div className="can-toggle__switch" data-checked="Pickup" data-unchecked="Delivery"></div>
              </label>
            </div>
          </div>
          <div className="horizontal-scroll">
            {location && location.menu.items.filter(i => i.showcase_order > 0).map(item => (
              <div key={item._id} id={item._id} className="item-container" onClick={
                (e) => handleMenuItemClick(e, item._id)
              }>
                <MenuItem source={item.img} alt={item.title} size="medium-image" />
                <div className="item-title">{item.title}</div>
                <div className="item-price">${item.price}</div>
              </div>
            ))
            }
          </div>
          <div className="category-container">
            <div className="category">
              <span className="category-title">Most Popular</span>
              <span>10</span>
            </div>
            {location && location.menu.categories.map((c,i) => (
              <div key={c._id} className="category" onClick={
                (e) => handleMenuCategoryClick(e, c._id)
              }>
                <span className="category-title">{c.title}</span>
                <span>{i}</span>
              </div>
            ))

            }
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(Location);
