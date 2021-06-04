import { Link } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
  return (
    <div className='not-found'>
      <p>Sorry, Page cannot be found</p>
      <Link to='/'>Return to home page...</Link>
    </div>
  );
};

export default NotFound;
