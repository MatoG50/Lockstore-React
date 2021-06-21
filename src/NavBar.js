import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from './redux/actions/lockstoreActions';

const NavBar = () => {
  const state = useSelector(state => state);
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

      {state.auth.role === 'attendant' ? (
        <img
          id='user'
          src='../resources/MGK.jpg'
          alt={state.auth.username}
        ></img>
      ) : (
        <img
          id='user'
          src='../resources/paul.jfif'
          alt={state.auth.username}
        ></img>
      )}

      <p className='name'>{state.auth.username}</p>
      <p className='role'>{state.auth.role}</p>
      <ul>
        <li>
          <NavLink activeClassName='active-nav' to='/dashboard'>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active-nav' to='/employees'>
            Employees
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active-nav' to='/products'>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active-nav' to='/sales'>
            Sales
          </NavLink>
        </li>
        <li>
          <NavLink to='/' onClick={() => handleLogout()}>
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
