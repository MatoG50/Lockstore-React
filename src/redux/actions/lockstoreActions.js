import axios from 'axios';
import actionTypes from '../constants/actionTypes';

// Authenication
// Login user

export const loginUser = creds => dispatch => {
  dispatch({
    type: actionTypes.USER_LOADING,
  });

  axios
    .post('https://storemanagerapi2.herokuapp.com/api/v2/auth/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.access_token);
      localStorage.setItem('user', res.data.username);
      localStorage.setItem('role', res.data.role);
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        token: res.data.access_token,
        user: res.data.username,
        role: res.data.role,
      });
      dispatch({
        type: actionTypes.CLEAR_ERRORS,
      });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: actionTypes.SHOW_ERRORS,
        msg: err.response.data.message,
        status: err.response.status,
      });
      dispatch({
        type: actionTypes.AUTH_ERROR,
      });
    });
};

// Token config for fetching

export const tokenConfig = getState => {
  // Get token
  const token = getState().auth.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return config;
};

// SIGN_UP
export const signUpUser = newCreds => (dispatch, getState) => {
  axios
    .post(
      'https://storemanagerapi2.herokuapp.com/api/v2/auth/signup',
      newCreds,
      tokenConfig(getState)
    )
    .then(res => {
      dispatch({
        type: actionTypes.SHOW_SUCCESS,
        msg: res.data.message,
        status: res.status,
      });
      alert(res.data.message);
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: actionTypes.SHOW_ERRORS,
        msg: err.response.data.message.inventory,
        status: err.response.status,
      });
    });
};

// CREATE PRODUCT
export const createProduct = newProd => (dispatch, getState) => {
  axios
    .post(
      'https://storemanagerapi2.herokuapp.com/api/v2/products',
      newProd,
      tokenConfig(getState)
    )
    .then(res => {
      dispatch({
        type: actionTypes.SHOW_SUCCESS,
        msg: res.data.message,
        status: res.status,
      });
      alert(res.data.message);
    })
    .catch(err => {
      console.log(err.response.data.message);
    });
};

// FETCH EMPLOYEES

export const fetchUsers = () => async (dispatch, getState) => {
  // User Loading
  dispatch({
    type: actionTypes.FETCH_DATA,
  });
  const response = await axios.get(
    'https://storemanagerapi2.herokuapp.com/api/v2/users',
    tokenConfig(getState)
  );
  dispatch({
    type: actionTypes.FETCH_EMPLOYEES_SUCCESS,
    payload: response.data,
  });
};

// FETCH PRODUCTS

export const fetchProducts = () => async (dispatch, getState) => {
  // User Loading
  dispatch({
    type: actionTypes.FETCH_DATA,
  });
  const response = await axios.get(
    'https://storemanagerapi2.herokuapp.com/api/v2/products',
    tokenConfig(getState)
  );
  dispatch({
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: response.data,
  });
};

// Fetch product
export const fetchProduct = id => async (dispatch, getState) => {
  // User Loading
  dispatch({
    type: actionTypes.FETCH_DATA,
  });
  const response = await axios.get(
    `https://storemanagerapi2.herokuapp.com/api/v2/products/${id}`,
    tokenConfig(getState)
  );
  dispatch({
    type: actionTypes.FETCH_PRODUCT_SUCCESS,
    payload: response.data,
  });
};

// Delete a product

export const removeProduct = id => async (dispatch, getState) => {
  axios
    .delete(
      `https://storemanagerapi2.herokuapp.com/api/v2/products/${id}`,
      tokenConfig(getState)
    )
    .then(res => {
      dispatch({
        type: actionTypes.SHOW_SUCCESS,
        msg: res.data.message,
      });
      alert(res.data.message);
      dispatch({
        type: actionTypes.CLEAR_SUCCESS,
      });
    });
};

// Update product
export const updateProduct = (id, editProd) => (dispatch, getState) => {
  axios
    .put(
      `https://storemanagerapi2.herokuapp.com/api/v2/products/${id}`,
      editProd,
      tokenConfig(getState)
    )
    .then(response => {
      dispatch({
        type: actionTypes.SHOW_SUCCESS,
        msg: response.data.message,
      });
      alert(response.data.message);
      dispatch({
        type: actionTypes.CLEAR_SUCCESS,
      });
    });
};

// Check token and load sales
export const fetchSales = () => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.FETCH_DATA,
  });

  const response = await axios.get(
    'https://storemanagerapi2.herokuapp.com/api/v2/sales',
    tokenConfig(getState)
  );
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

// Errors handling
// Show Error

export const returnErrors = msg => {
  return {
    type: actionTypes.SHOW_ERRORS,
    payload: msg,
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: actionTypes.CLEAR_ERRORS,
  };
};

// Logout
export const logOut = () => {
  return {
    type: actionTypes.LOGOUT_SUCCESS,
  };
};
