import React from 'react';
import { withRouter } from  'react-router-dom';
import './RestaurantPreview.css';
import MenuItem from '../MenuItem';
import moment from "moment";

// Container Component
const RestaurantContainer = (props) => {
  const location = props.establishment;

  // Calculate the average rating
  const numReviews = location.reviews.length;
  let avgRating;
  numReviews
    ? avgRating = ((location.reviews.map(r => r.rating).reduce((total, r) => total + r)) / numReviews).toFixed(1)
    : avgRating = 0;

  // Get the current time and compare with the restaurant's hours of operation
  const currentTime = moment().format('HH:mm');
  const openTime = location.hours.doors_open;
  const closeTime = location.hours.doors_close;
  let isOpen = null;
  (currentTime >= openTime && currentTime <= closeTime) ? isOpen = true : isOpen = false;

  const handleClick = (event) => {
    event.preventDefault();
    console.log('User wants to view:',location.title);
  }

  return (
    <div>
      <RestaurantPreview
        menu={location.menu}
        isOpen={isOpen}
        title={location.title}
        category={location.cuisine.category}
        subcategory={location.cuisine.subcategory}
        price_range={location.price_range}
        openTime={openTime}
        avgRating={avgRating}
        numReviews={numReviews}
        eta={location.delivery.eta}
        delivery={location.delivery.description}
        viewLocation={handleClick}
      />
      <hr />
    </div>
  )
};

// Presentational Component
const RestaurantPreview = (props) => (
  <div className="restaurant-preview" onClick={props.viewLocation}>
    <div className="horizontal-scroll menu-items">
      {props.menu.show_preview &&
        props.menu.items.filter(i => i.showcase_order > 0).map((item, index) => (
          <MenuItem key={index} source={item.img} alt={item.title} size="small-image" />
        ))
      }
    </div>
    {!props.isOpen && <div className="restaurant-status">Currently Closed</div>}
    <div className="restaurant-title">{props.title}</div>
    <div className="cuisine-hours restaurant-details">
      <div className="cuisine">{props.category} ({props.subcategory}) <span className="dot"></span> {props.price_range}</div>
      {props.isOpen
        ? <div>{props.eta}</div>
        : <div className="hours">Opens at {props.openTime} {`${(props.openTime > '11:59') ? 'PM' : 'AM'}`}</div>
      }
    </div>
    <div className="ratings-reviews-delivery restaurant-details">
      {props.numReviews
        ? (
          <div className="ratings-reviews">
            <div className={`ratings ${props.avgRating > 4.6 && 'high'}`}>{props.avgRating} <i className="fas fa-star"></i></div>
            <div className="reviews">{props.numReviews} reviews</div>
          </div>
        )
        : (
          <div className="ratings-reviews">
            <div className="ratings"><i className="fas fa-star"></i></div>
            <div className="reviews">Newly Added</div>
          </div>
        )
      }
      <div className="delivery">{props.delivery}</div>
    </div>
  </div>
);

export default withRouter(RestaurantContainer);
