import { useSelector } from 'react-redux';
import './EmployeeCard.css';

const EmployeeCard = () => {
  const employees = useSelector(state => state.displayEmployees);
  console.log(employees);

  return (
    <div className='employee-card'>
      <img id='emp-image' src='./resources/user.svg' alt='Employee'></img>
      <p className='emp-name'>MGK</p>
      <p className='emp-role'>Attendant</p>
    </div>
  );
};

export default EmployeeCard;
