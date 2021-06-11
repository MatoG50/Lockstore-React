import actionTypes from '../constants/actionTypes';

const initialState = [];

export const showEmpReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SHOW_EMPLOYEES:
      return { ...state, employees: payload };
    case actionTypes.FETCH_EMPLOYEES:
      return { ...state, employees: payload };

    default:
      return state;
  }
};

export const showSalesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SHOW_SALES:
      return { ...state, sales: payload };

    default:
      return state;
  }
};
