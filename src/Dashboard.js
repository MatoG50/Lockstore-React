import './Dashboard.css';
import Date from './Date';

const Dashboard = () => {
  return (
    <div className='main-page'>
      <Date />
      <div className='dash-message'>
        <p className='text-1'>WELCOME TO YOUR DASHBOARD, MARTIN.</p>
        <p className='text-2'>
          View your company's performance through the cards below
        </p>
      </div>
      <div className='cards'>
        <div className='card'>
          <p className='card-name'>Total products</p>
          <p className='card-no'>84</p>
        </div>
        <div className='card'>
          <p className='card-name'>Total employees</p>
          <p className='card-no'>10</p>
        </div>
        <div className='card'>
          <p className='card-name'>Sales Performance</p>
          <p className='card-no'>70%</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
