import { useSelector } from 'react-redux';
import './EmployeeCard.css';

const EmployeeCard = () => {
  const employees = useSelector(
    state => state.displayEmployees.employees?.users
  );
  const employeeList =
    employees &&
    employees.map(emp => {
      const { id, username, role } = emp;
      return (
        <div className='employee-card' key={id}>
          <img id='emp-image' src='./resources/user.svg' alt='Employee'></img>
          <p className='emp-name'>{username}</p>
          <p className='emp-role'>{role}</p>
        </div>
      );
    });
  return !employeeList ? (
    <p className='loading'>Loading employees....</p>
  ) : (
    employeeList
  );
};

export default EmployeeCard;
