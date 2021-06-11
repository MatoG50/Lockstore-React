import { useSelector } from 'react-redux';
import './EmployeeCard.css';

const EmployeeCard = () => {
  const employees = useSelector(
    state => state.displayEmployees.employees?.users
  );
  console.log(employees);
  const employeeList = employees && employees.map(emp => {
    const { username, role } = emp;
    return (
      <div className='employee-card'>
        <img id='emp-image' src='./resources/user.svg' alt='Employee'></img>
        <p className='emp-name'>{username}</p>
        <p className='emp-role'>{role}</p>
      </div>
    );
  });

  // return <>{employeeList}</>;
  return (
    !employeeList ? <p className="loading">Loading employees....</p> : employeeList
  )
};

export default EmployeeCard;
