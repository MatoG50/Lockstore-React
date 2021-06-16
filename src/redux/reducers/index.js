import { combineReducers } from 'redux';
import {
  authReducer,
  errorsReducer,
  showEmpReducer,
  showSalesReducer,
} from './lockstoreReducers';

const reducers = combineReducers({
  displayEmployees: showEmpReducer,
  displaySales: showSalesReducer,
  auth: authReducer,
  displayErrors: errorsReducer,
});

export default reducers;
