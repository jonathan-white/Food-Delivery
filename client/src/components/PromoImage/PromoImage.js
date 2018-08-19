import React from 'react';
import './PromoImage.css';

const PromoImage = (props) => {
  return (
    <div className={`promo-image ${props.className}`}>
      <img src={props.source} alt={props.alt} />
      {props.children}
    </div>
  )
}

export default PromoImage;
