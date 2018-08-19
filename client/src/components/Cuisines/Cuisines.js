import React from 'react';
import './Cuisines.css';
import cuisines from '../../constants/cuisines.json';
import CuisineCircle from '../CuisineCircle/';

const Cuisines = () => (
  <div className="cuisines">
    <h1 className="section-title">Cuisines</h1>
    <hr className="section-hr" />
    <div className="horizontal-scroll">
      {
        cuisines.map(c =>
          <CuisineCircle
            key={c.title}
            label={c.title}
            image={c.image}
          />)
      }
    </div>
  </div>
);

export default Cuisines;
