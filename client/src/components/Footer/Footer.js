import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import * as routes from '../../constants/routes';

const Footer = () => (
  <div className="container footer-row">
    <div className="row">
      <div className="col-4 footer-item active">
        <Link to={routes.FOOD}>
          <div><i className="fas fa-utensils"></i></div>
          <div>Food</div>
        </Link>
      </div>
      <div className="col-4 footer-item">
        <Link to={routes.DRINKS}>
          <div><i className="fas fa-glass-martini"></i></div>
          <div>Drinks</div>
        </Link>
      </div>
      <div className="col-4 footer-item">
        <Link to={routes.ORDERS}>
          <div>
            <i className="fas fa-shopping-bag"></i>
          </div>
          <div>Orders</div>
        </Link>
      </div>
    </div>
    {/* <div className="row">
      <div>Icons made by
        <a href="http://www.freepik.com" title="Freepik">Freepik</a> from
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        is licensed by
        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    </div> */}
  </div>
);

export default Footer;
