import { combineReducers } from 'redux';
import {
  authReducer,
  errorsReducer,
  showEmpReducer,
  showProdReducer,
  showSingleProdReducer,
  showSalesReducer,
} from './lockstoreReducers';

const reducers = combineReducers({
  auth: authReducer,
  displayEmployees: showEmpReducer,
  displayProducts: showProdReducer,
  showProduct: showSingleProdReducer,
  displaySales: showSalesReducer,
  displayErrors: errorsReducer,
});

export default reducers;
