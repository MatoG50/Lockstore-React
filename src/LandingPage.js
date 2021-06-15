import './LandingPage.css';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { loginUser } from './redux/actions/lockstoreActions';

const LandingPage = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
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

  if (auth.token) return <Redirect to='/dashboard' />;
  return (
    <div className='landing-page'>
      <div className='login-logo'>
        <img src='../resources/LockStore Logo.svg' alt='Lockstore Logo' />
      </div>
      <div className='login-form'>
        <p className='login'>Log In</p>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <br />
          <input
            type='email'
            value={creds.email}
            onChange={e => setCreds({ ...creds, email: e.target.value })}
            required
          />
          <br />
          <label>Password</label>
          <br />

          <input
            type='password'
            value={creds.password}
            onChange={e => setCreds({ ...creds, password: e.target.value })}
            required
          />
          <br />
          <button type='submit'>Log In</button>
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
