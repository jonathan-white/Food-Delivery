import React, { Component } from 'react';
import { withRouter } from  'react-router-dom';
import Header from '../../Header/';
import API from '../../../utils/API';
import './MenuItemPage.css';

class MenuItemPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuItem: null,
      error: null
    }
  }

  componentDidMount() {
    console.log(this.props);
    API.getMenuItem(this.props.menuItemId)
      .then(res => {
        console.log(res.data);
        this.setState({menuItem: res.data});
      })
      .catch(err => this.setState({error: err}))
  }

  render() {
    const { menuItem } = this.state;
    console.log('menu Item:', this.state.menuItem);
    return (
      <div>
        <div>
          <img
            className="item-image" src={menuItem && menuItem.img}
            alt={menuItem && menuItem.title}/>
        </div>
        <div className="menu-item-title">{menuItem && menuItem.title}</div>
        <div className="choices">
          <div className="choice-header">
            Wings Sauce Choice
            <span className="required">Required</span>
          </div>
          <div className="choice-body">
            <div className="choice-option">
              <input type="radio" id="bbq" name="wing-sauce" />
              <label htmlFor="bbq"><span><span></span></span>BBQ (Mild)</label>
            </div>
            <div className="choice-option">
              <input type="radio" id="habanero" name="wing-sauce" />
              <label htmlFor="habanero"><span><span></span></span>Habanero (Extra Hot)</label>
            </div>
            <div className="choice-option">
              <input type="radio" id="joes-regular" name="wing-sauce" />
              <label htmlFor="joes-regular"><span><span></span></span>Joe's Regular (Medium)</label>
            </div>
            <div className="choice-option">
              <input type="radio" id="spice-garlic-hot" name="wing-sauce" />
              <label htmlFor="spice-garlic-hot"><span><span></span></span>Spicy Garlic (Hot)</label>
            </div>
            <div className="choice-option">
              <input type="radio" id="spice-garlic-med" name="wing-sauce" />
              <label htmlFor="spice-garlic-med"><span><span></span></span>Spicy Garlic (Medium)</label>
            </div>
            <div className="choice-option">
              <input type="radio" id="sweet-chilli" name="wing-sauce" />
              <label htmlFor="sweet-chilli"><span><span></span></span>Sweet Chilli (Medium)</label>
            </div>
          </div>
        </div>
        <div className="suggestions">
          <div className="choice-header">
            People Also Added:
          </div>
          <div className="choice-body">
            <div className="choice-option">
              <input type="checkbox" id="pickles" name="suggestions" value="option" />
              <label htmlFor="pickles"><span><span></span></span>Deep-Fried Pickles</label>
              <span className="price">$9.99</span>
            </div>
            <div className="choice-option">
              <input type="checkbox" id="fries" name="suggestions" value="option" />
              <label htmlFor="fries"><span><span></span></span>French Fries</label>
              <span className="price">$3.99</span>
            </div>
            <div className="choice-option">
              <input type="checkbox" id="onions" name="suggestions" value="option" />
              <label htmlFor="onions"><span><span></span></span>Onion Rings</label>
              <span className="price">$3.99</span>
            </div>
          </div>
        </div>
        <button className="btn-add-to-cart" data-price={`$${menuItem && menuItem.price}`}>Add to Cart</button>
      </div>
    )
  }
}

export default withRouter(MenuItemPage);
