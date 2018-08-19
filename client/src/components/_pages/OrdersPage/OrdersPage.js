import React from 'react';
import Header from '../../Header/';
import Footer from '../../Footer/';
import './OrdersPage.css';

const OrdersPage = () => (
  <div>
    <Header label="Orders" />
    <div className="orders">
      No Recent Orders
    </div>
    <Footer />
  </div>
);

export default OrdersPage;
