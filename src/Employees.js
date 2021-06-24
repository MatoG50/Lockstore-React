import './Employees.css';
import PageTitle from './PageTitle';
import { useHistory } from 'react-router';
import EmployeeCard from './EmployeeCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from './redux/actions/lockstoreActions';
import Today from './Today';

const Employees = () => {
  const history = useHistory();
  const employees = useSelector(
    state => state.displayEmployees.employees?.users
  );
  const attendants =
    employees && employees.filter(cur => cur.role === 'attendant').length;
  const admin =
    employees && employees.filter(cur => cur.role === 'admin').length;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className='main-page'>
      <Today />
      <PageTitle title='Employees' />
      <p className='total-emp'>
        Total employees: <span>{employees ? employees.length : null}</span>
      </p>
      <div className='employee-no'>
        <div className='attendants'>
          <p>
            Attendants: <span>{employees ? attendants : null}</span>
          </p>
        </div>
        <div className='admin'>
          <p>
            Admin: <span>{employees ? admin : null}</span>
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
