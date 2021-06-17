import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Protected = ({ children }) => {
  const token = useSelector(state => state.auth.token);
  if (token) {
    return children;
  } else {
    return <Redirect to='/' />;
  }
};

export default Protected;
