import actionTypes from '../constants/actionTypes';

export const showEmpReducer = (
  state = {
    loading: false,
  },
  { type, payload }
) => {
  switch (type) {
    case actionTypes.FETCH_DATA:
      return { ...state, loading: true };
    case actionTypes.FETCH_EMPLOYEES_SUCCESS:
      return { ...state, employees: payload, loading: false };
    default:
      return state;
  }
};

export const showSalesReducer = (
  state = {
    loading: false,
  },
  { type, payload }
) => {
  switch (type) {
    case actionTypes.FETCH_DATA:
      return { ...state, loading: true };
    case actionTypes.FETCH_SALES_SUCCESS:
      return { ...state, sales: payload, loading: false };

    default:
      return state;
  }
};

export const authReducer = (
  state = {
    token: localStorage.getItem('token'),
    username: localStorage.getItem('user'),
    role: localStorage.getItem('role'),
    loading: false,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.USER_LOADING:
      return { ...state, loading: true };
    case actionTypes.USER_LOADED:
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        username: action.user,
        role: action.role,
        loading: false,
      };
    case actionTypes.AUTH_ERROR:
    case actionTypes.LOGOUT_SUCCESS:
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('role');
      return {
        ...state,
        token: null,
        loading: false,
        username: null,
        role: null,
      };

    default:
      return state;
  }
};

export const errorsReducer = (state = { msg: null, status: null }, action) => {
  switch (action.type) {
    case actionTypes.SHOW_ERRORS:
      return { ...state, msg: action.msg, status: action.status };
    case actionTypes.CLEAR_ERRORS:
      return { ...state, msg: null, status: null };

    default:
      return state;
  }
};
