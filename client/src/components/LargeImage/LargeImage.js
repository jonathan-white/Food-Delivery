import React from 'react';
import './LargeImage.css';

const LargeImage = (props) => {
  return (
    <div className="large-image">
      <img src={props.source} alt={props.alt} />
      {props.children}
    </div>
  )
}

export default LargeImage;
