import './Employees.css';
import Date from './Date';
import PageTitle from './PageTitle';
import { useHistory } from 'react-router';

const Employees = () => {
  const history = useHistory();

  return (
    <div className='main-page'>
      <Date />
      <PageTitle title='Employees' />
      <p className='total-emp'>
        Total employees: <span>20</span>
      </p>
      <div className='employee-no'>
        <div className='attendants'>
          <p>
            Attendants: <span>20</span>
          </p>
        </div>
        <div className='admin'>
          <p>
            Admin: <span>2</span>
          </p>
        </div>
        <button
          id='add-employee'
          onClick={() => {
            history.push('/addemployee');
          }}
        >
          Add Employee
        </button>
      </div>
      <div className='employee-cards'>
        <div className='employee-card'>
          <img id='emp-image' src='./resources/user.svg' alt='Employee'></img>
          <p className='emp-name'>Martin Githinji</p>
          <p className='emp-role'>Attendant</p>
        </div>
        <div className='employee-card'>
          <img id='emp-image' src='./resources/user.svg' alt='Employee'></img>
          <p className='emp-name'>Martin Githinji</p>
          <p className='emp-role'>Attendant</p>
        </div>
        <div className='employee-card'>
          <img id='emp-image' src='./resources/user.svg' alt='Employee'></img>
          <p className='emp-name'>Martin Githinji</p>
          <p className='emp-role'>Attendant</p>
        </div>
        <div className='employee-card'>
          <img id='emp-image' src='./resources/user.svg' alt='Employee'></img>
          <p className='emp-name'>Martin Githinji</p>
          <p className='emp-role'>Attendant</p>
        </div>
        <div className='employee-card'>
          <img id='emp-image' src='./resources/user.svg' alt='Employee'></img>
          <p className='emp-name'>Martin Githinji</p>
          <p className='emp-role'>Attendant</p>
        </div>
        <div className='employee-card'>
          <img id='emp-image' src='./resources/user.svg' alt='Employee'></img>
          <p className='emp-name'>Martin Githinji</p>
          <p className='emp-role'>Attendant</p>
        </div>
      </div>
    </div>
  );
};

export default Employees;
