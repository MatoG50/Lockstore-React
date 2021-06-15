import './NavBar.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from './redux/actions/lockstoreActions';

const NavBar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className='navbar'>
      <img
        id='logo-img'
        src='../resources/LockStore Logo.svg'
        alt='Lockstore Logo'
      ></img>

      <img id='user' src='../resources/MGK.jpg' alt='Lockstore Logo'></img>

      <p className='name'>Martin Githinji</p>
      <p className='role'>Attendant</p>
      <ul>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link to='/employees'>Employees</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
        <li>
          <Link to='/sales'>Sales</Link>
        </li>
        <li>
          <Link to='/' onClick={() => handleLogout()}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
