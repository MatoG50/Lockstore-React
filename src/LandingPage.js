import './LandingPage.css';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { clearErrors, loginUser } from './redux/actions/lockstoreActions';

const LandingPage = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const [creds, setCreds] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser(creds));
    setCreds({
      email: '',
      password: '',
    });
  };

  if (state.auth.token) return <Redirect to='/dashboard' />;
  return (
    <div className='landing-page'>
      <div className='login-logo'>
        <img src='../resources/LockStore Logo.svg' alt='Lockstore Logo' />
      </div>
      <div className='login-form'>
        <p className='login'>Log In</p>
        {state.displayErrors.msg ? (
          <p className='error-message'>{state.displayErrors.msg}</p>
        ) : (
          <p className='error-message' style={{ display: 'none' }}>
            {state.displayErrors.msg}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <br />
          <input
            type='email'
            value={creds.email}
            onChange={e => {
              dispatch(clearErrors());
              setCreds({ ...creds, email: e.target.value });
            }}
            required
          />
          <br />
          <label>Password</label>
          <br />

          <input
            type='password'
            value={creds.password}
            onChange={e => {
              dispatch(clearErrors());
              setCreds({ ...creds, password: e.target.value });
            }}
            required
          />
          <br />
          {state.auth.loading === true ? (
            <div className='loader'></div>
          ) : (
            <button type='submit'>Log In</button>
          )}
        </form>
        <Link className='forgot-pass' to='/forgotpassword'>
          Forgot Password?
        </Link>
        <p className='new-acc'>
          Don't have an account?
          <span>
            <Link className='req-pass' to='/newaccount'>
              Request one
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
