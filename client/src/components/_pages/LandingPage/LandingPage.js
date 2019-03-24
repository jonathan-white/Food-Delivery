import React from 'react';
import { Link } from "react-router-dom";
import './LandingPage.css';
import Logo from '../../Logo';
import * as routes from '../../../constants/routes';

let timerId;

const cycleImages = () => {
  let index = 0;

  // Cycle through slider images every 5 seconds
  timerId = setInterval(function () {
    const slider = document.querySelector('.slider');
    const slideCount = slider.childNodes.length;

    // Remove the 'active' class from the old index
    slider.childNodes[index].classList.remove('active');

    // Increment index
    index++;

    //reset index back to 0 if we have looped through all images
    if(index === slideCount){
      index = 0;
    }

    // Add the 'active' class to the new index
    slider.childNodes[index].classList.add('active');
  }, 5000);
};

const LandingPage = () => {

  cycleImages();

  return (
    <div>
      <div className="top-section">
        <div className="slider">
          <div className="slide-image image-1 active"></div>
          <div className="slide-image image-2"></div>
          <div className="slide-image image-3"></div>
        </div>
        <Logo size="fa-4x" />
      </div>
      <div className="bottom-section">
				<Link to={routes.FOOD}>
					<div className="btn-signin-google">
						<i className="google-icon"></i>
						Continue with Google
					</div>
				</Link>
				<Link to={routes.FOOD}>
					<div className="btn-signin-facebook">
						<i className="facebook-icon"></i>
						Continue with Facebook
					</div>
				</Link>
        <div className="login-container">
          <div className="login-wrapper">
            <Link to={routes.LOGIN}>
              <div className="btn-manual-login" onClick={() => clearInterval(timerId)}>Log in</div>
            </Link>
          </div>
          <div className="login-wrapper">
            <div className="btn-manual-login">Sign up</div>
          </div>
        </div>
        <div className="disclaimer">
          <div>By clicking Sign up, Continue with Facebook, or Continue</div>
          <div>with Google, you agree to our <a href="">Terms and Conditions</a></div>
          <div>and <a href="">Privacy Statement</a></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
