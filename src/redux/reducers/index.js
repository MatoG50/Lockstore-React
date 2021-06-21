import { combineReducers } from 'redux';
import {
  authReducer,
  errorsReducer,
  showEmpReducer,
  showProdReducer,
  showSingleProdReducer,
  showSalesReducer,
  showSuccessReducer,
} from './lockstoreReducers';

const reducers = combineReducers({
  auth: authReducer,
  displayEmployees: showEmpReducer,
  displayProducts: showProdReducer,
  showProduct: showSingleProdReducer,
  displaySales: showSalesReducer,
  displayErrors: errorsReducer,
  successMessage: showSuccessReducer,
});

export default reducers;
