import React from 'react';
import './Header.css';

const Header = (props) => (
  <div className="container header-row">
    <div className="row">
      <div className="col-2"><i className="fas fa-bars"></i></div>
      <div className="col-8 header-label">{props.label}</div>
      <div className="col-2"><i className="fas fa-search"></i></div>
    </div>
  </div>
)

export default Header;
