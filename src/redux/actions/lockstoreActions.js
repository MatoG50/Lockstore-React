import fetchEmployeeApi from '../../apis/fetchEmployeesApi';
import actionTypes from '../constants/actionTypes';

export const fetchEmployees = () => async (dispatch, getState) => {
  const response = await fetchEmployeeApi.get('/users');
  console.log(response.data);
  dispatch({
    type: actionTypes.FETCH_EMPLOYEES,
    payload: response.data,
  });
};

export const showEmployees = employees => {
  return {
    type: actionTypes.SHOW_EMPLOYEES,
    payload: employees,
  };
};

export const addEmployee = employee => {
  return {
    type: actionTypes.ADD_EMPLOYEE,
    payload: employee,
  };
};

export const showSales = sales => {
  return {
    type: actionTypes.SHOW_SALES,
    payload: sales,
  };
};
