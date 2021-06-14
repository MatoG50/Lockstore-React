import actionTypes from '../constants/actionTypes';

const initialState = {
  loading: false,
};

export const showEmpReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_DATA:
      return { ...state, loading: true };
    case actionTypes.FETCH_EMPLOYEES_SUCCESS:
      return { ...state, employees: payload, loading: false };
    default:
      return state;
  }
};

export const showSalesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_DATA:
      return { ...state, loading: true };
    case actionTypes.FETCH_SALES_SUCCESS:
      return { ...state, sales: payload, loading: false };

    default:
      return state;
  }
};
