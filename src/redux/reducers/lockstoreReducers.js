import actionTypes from '../constants/actionTypes';

const initialState = {
  loading: false
};

export const showEmpReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SHOW_EMPLOYEES:
      return { ...state, employees: payload };
      case actionTypes.FETCH_EMPLOYEES:
        return { ...state, loading: true}
    case actionTypes.FETCH_EMPLOYEES_SUCCESS:
      return { ...state, employees: payload, loading: false };
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
