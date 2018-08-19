import React from 'react';
import PromoImage from '../PromoImage/';
import './NewCustomerPromo.css';

const NewCustomerPromo = () => (
  <div className="newcustomer-promo">
    <PromoImage className="newcustomer" source="https://storage.googleapis.com/food-service-c6def.appspot.com/promos/newcustomer.jpg" alt="promo">
      <div className="newcustomer-promo-title">Free Delivery All Month!</div>
      <div className="newcustomer-promo-text">No delivery fee for new customers for 30 days</div>
    </PromoImage>
  </div>
);

export default NewCustomerPromo;
