import React, { Component } from 'react';
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
    return (
      <div>
        <Header label={`${location && location.title}`} />
        <div className="location-info">
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
            {location && location.menu.items.filter(i => i.showcase_order > 0).map((item, index) => (
              <div className="item-container">
                <MenuItem key={index} source={item.img} alt={item.title} size="medium-image" />
                <div className="item-title">{item.title}</div>
                <div className="item-price">${item.price}</div>
              </div>
            ))
            }
          </div>
          <div className="category-container">
            {location && location.menu.categories.map((c,i) => (
              <div key={c._id} className="category">
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

export default Location;
