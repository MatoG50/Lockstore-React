import fetchEmployeeApi from '../../apis/fetchEmployeesApi';
import actionTypes from '../constants/actionTypes';

export const fetchEmployees = () => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.FETCH_DATA,
  });
  const response = await fetchEmployeeApi.get('/users');
  dispatch({
    type: actionTypes.FETCH_EMPLOYEES_SUCCESS,
    payload: response.data,
  });
};
export const fetchSales = () => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.FETCH_DATA,
  });
  const response = await fetchEmployeeApi.get('/sales');
  dispatch({
    type: actionTypes.FETCH_SALES_SUCCESS,
    payload: response.data,
  });
};

export const addEmployee = employee => {
  return {
    type: actionTypes.ADD_EMPLOYEE,
    payload: employee,
  };
};
