import React from 'react';
import Header from '../../Header/';
import Footer from '../../Footer/';
import './DrinksPage.css';

const DrinksPage = () => (
  <div>
    <Header label="Drinks" />
    <div className="drinks">
      No Search Results for "Alcohol".
    </div>
    <Footer />
  </div>
);

export default DrinksPage;
