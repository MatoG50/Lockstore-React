import { combineReducers } from 'redux';
import { showEmpReducer, showSalesReducer } from './lockstoreReducers';

const reducers = combineReducers({
  displayEmployees: showEmpReducer,
  displaySales: showSalesReducer,
});

export default reducers;
