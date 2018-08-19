import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from  'react-router-dom';
import Logo from '../../Logo';
import { auth } from '../../../firebase';
import * as routes from '../../../constants/routes';
import './LoginPage.css';

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null
    }
  }

  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  };

  componentWillUnmount() {
    this.unsubscribe();
  };

  render() {
    const { store } = this.context;
    const state = store.getState();
    const error = this.state.error;

    // Check if the user has entered acceptable email/password
    let valid_email = false;
    let valid_password = false;
    const checkPassword = (password) => {
      return password ? (password.length > 7 ? true : false) : false;
    };

    // Determine if email and password are valid
    if(state.login.credentials) {
      valid_email = /.+@.+\..+/.test(state.login.credentials.email);
      valid_password = checkPassword(state.login.credentials.password);
    }

    const handleLogin = (event) => {
      event.preventDefault();

      // Clear error state
      this.setState({error: null})

      const { email, password } = state.login.credentials;

      auth.doSignInWithEmailAndPassword(email, password)
        .then((resp) => {
          console.log('Login Successful:',resp);

          const userData = {
            email: resp.user.email,
            uid: resp.user.uid,
            metadata: {
              a: resp.user.metadata.a,
              b: resp.user.metadata.b,
              creationTime: resp.user.metadata.creationTime,
              lastSignInTime: resp.user.metadata.lastSignInTime
            }
          };

          localStorage.setItem('userData',JSON.stringify(userData));

          // navigate to the food page after successful login
          this.props.history.push(routes.FOOD);
        })
        .catch(error => {
          console.log('Error while logging in', error);
          this.setState({error: error})
        });
    }

    return (
      <div className="page-container">
        <div className="logo-password-reset">
          <div className="logo-holder">
            <Logo size="fa-2x" />
          </div>
          <div>
            <a href="/accounts/password/reset/">
              Forgot password?
            </a>
          </div>
        </div>
        <div className="page-title">Log in</div>
        <div className="form-container">
          <form className="login-form">
            <div className="inputfield">
              <input
                className={`${valid_email ? 'valid' : ''}`}
                type="email"
                placeholder="Email address"
                onChange={(e) =>
                  store.dispatch({
                    type: 'UPDATE_EMAIL',
                    email: e.target.value
                  })
                }
              />
              <span className="indicators">
                <i className={`fas fa-check-circle ${valid_email ? '' : 'hide'}`}></i>
              </span>
            </div>
            <div className="inputfield">
              <input
                className={`${valid_password ? 'valid' : ''}`}
                type={state.login.displayPassword ? 'text' : 'password'}
                placeholder="Password"
                onChange={(e) =>
                  store.dispatch({
                    type: 'UPDATE_PASSWORD',
                    password: e.target.value
                  })
                }
              />
              <span className="indicators">
                {
                  state.login.displayPassword ? (
                    <i className="far fa-eye" title="Show" onClick={() =>
                      store.dispatch({
                        type: 'TOGGLE_PASSWORD'
                      })
                    }></i>
                  ) : (
                    <i className="fas fa-eye" title="Hide" onClick={() =>
                      store.dispatch({
                        type: 'TOGGLE_PASSWORD'
                      })
                    }></i>
                  )
                }
                <i className={`fas fa-check-circle ${valid_password ? '' : 'hide'}`}></i>
              </span>
            </div>
            <div className="status-and-continue">
              <div className={`${error ? 'display-error-message' : 'hide-error-message'}`}>
                Unable to login with provided credentials
              </div>
              <button
                disabled={!(valid_email && valid_password)}
                className="btn-continue"
                onClick={handleLogin}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
};
LoginPage.contextTypes = {
  store: PropTypes.object
};

export default withRouter(LoginPage);
