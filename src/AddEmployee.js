import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './AddEmployee.css';
import PageTitle from './PageTitle';
import { signUpUser } from './redux/actions/lockstoreActions';
import Today from './Today';

const AddEmployee = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [newCreds, setNewCreds] = useState({
    username: '',
    email: '',
    password: '',
    // confirm_password: '',
    role: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signUpUser(newCreds));
    setNewCreds({
      username: '',
      email: '',
      password: '',
      // confirm_password: '',
      role: '',
    });
  };

  return (
    <div className='main-page'>
      <Today />
      <PageTitle title='Add Employee' />
      <form id='add-form' onSubmit={handleSubmit}>
        {state.displayErrors.msg ? (
          <p className='error-message'>{state.displayErrors.msg}</p>
        ) : (
          <p className='error-message' style={{ display: 'none' }}>
            {state.displayErrors.msg}
          </p>
        )}
        <label>username</label>
        <br />
        <input
          type='text'
          value={newCreds.username}
          onChange={e => {
            // dispatch(clearErrors());
            setNewCreds({ ...newCreds, username: e.target.value });
          }}
          required
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type='email'
          value={newCreds.email}
          onChange={e => {
            setNewCreds({ ...newCreds, email: e.target.value });
          }}
          required
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type='password'
          value={newCreds.password}
          onChange={e => {
            setNewCreds({ ...newCreds, password: e.target.value });
          }}
          required
        />
        <br />
        <label>Confirm Password</label>
        <br />
        <input
          type='password'
          value={newCreds.confirm_password}
          // onChange={e => {
          //   setNewCreds({ ...newCreds, confirm_password: e.target.value });
          // }}
          // required
        />
        <br />
        <label>Role</label>
        <br />
        <input
          type='text'
          value={newCreds.role}
          onChange={e => {
            setNewCreds({ ...newCreds, role: e.target.value });
          }}
          required
        />
        <br />
        <button type='submit'>Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
