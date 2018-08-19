import React from 'react';
import './Logo.css';

const Logo = (props) => (
  <div className="logo-icon">
    <i className={`fas fa-dot-circle ${props.size}`}></i>
  </div>
);

export default Logo;
