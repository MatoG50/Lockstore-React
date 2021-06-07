import './AddEmployee.css';
import Date from './Date';
import PageTitle from './PageTitle';

const AddEmployee = () => {
  return (
    <div className='main-page'>
      <Date />
      <PageTitle title='Add Employee' />
      <form id='add-form'>
        <label>username</label>
        <br />
        <input type='text' required />
        <br />
        <label>Email</label>
        <br />
        <input type='email' required />
        <br />
        <label>Password</label>
        <br />
        <input type='password' required />
        <br />
        <label>Confirm Password</label>
        <br />
        <input type='password' required />
        <br />
        <label>Role</label>
        <br />
        <input type='text' required />
        <br />
        <button>Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
