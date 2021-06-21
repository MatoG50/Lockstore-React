import { useSelector } from 'react-redux';
import './Dashboard.css';
import Today from './Today';


const Dashboard = () => {
  const state = useSelector(state => state);
  const product = useSelector(
    state => state.displayProducts.products?.Products
  );
  const employees = useSelector(
    state => state.displayEmployees.employees?.users
  );
  return (
    <div className='main-page'>
      <Today />
      <div className='dash-message'>
        <p className='text-1'>
          WELCOME TO YOUR DASHBOARD, <span>{state.auth.username}</span>.
        </p>
        <p className='text-2'>
          View your company's performance through the cards below
        </p>
      </div>
      <div className='cards'>
        <div className='card'>
          <p className='card-name'>Total products</p>
          <p className='card-no'>{product ? product.length : 24}</p>
        </div>
        <div className='card'>
          <p className='card-name'>Total employees</p>
          <p className='card-no'>{employees ? employees.length : 20}</p>
        </div>
        <div className='card'>
          <p className='card-name'>Sales Performance</p>
          <p className='card-no'>80%</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
