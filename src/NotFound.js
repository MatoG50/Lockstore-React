import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className="not-found-sub">
      <p>Sorry, Page cannot be found</p>
      <Link to='/'>Return to home page...</Link>
      </div>
      
    </div>
  );
};

export default NotFound;
