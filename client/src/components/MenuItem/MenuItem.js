import React from 'react';
import './MenuItem.css';

const MenuItem = (props) => {
  return (
    <div className={`menu-item ${props.size}`}>
      <img src={props.source} alt={props.alt} />
      {props.children}
    </div>
  )
}

export default MenuItem;
