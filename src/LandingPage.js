import './LandingPage.css';
const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className='login-logo'>
        <img src='../resources/LockStore Logo.svg' alt='Lockstore Logo' />
      </div>
      <div className='login-form'>
        <p className='login'>Log In</p>
        <form>
          <label>Email</label>
          <br />
          <input type='email' required />
          <br />
          <label>Password</label>
          <br />

          <input type='password' required />
          <br />
          <button>Log In</button>
        </form>
        <a className='forgot-pass' href='#'>
          Forgot Password?
        </a>
        <p className='new-acc'>
          Don't have an account?{' '}
          <span>
            <a className='req-pass' href='#'>
              Request one
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
