import './Employees.css';
import Date from './Date';
import PageTitle from './PageTitle';
import { useHistory } from 'react-router';
import EmployeeCard from './EmployeeCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from './redux/actions/lockstoreActions';

const Employees = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

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
        <EmployeeCard />
      </div>
    </div>
  );
};

export default Employees;
