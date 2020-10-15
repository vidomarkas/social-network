import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

// Action types
const SET_USER_DATA = "auth/SET_USER_DATA";
const LOGIN = "auth/LOGIN";
const LOGOUT = "auth/LOGOUT";

// Initial state
const initialState = {
  userId: null,
  email: null,
  login: null,
  isLoading: false,
  isAuthenticated: false,
};

// Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload, isAuthenticated: true };
    case LOGIN:
      return { ...state, userId: action.userId, isAuthenticated: true };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};

// Action creators
export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  payload: { email, userId, login },
});
export const loginAC = (userId) => ({
  type: LOGIN,
  userId,
});
export const logoutAC = () => ({
  type: LOGOUT,
});

// Thunks
export const authenticate = () => async (dispatch) => {
  const response = await authAPI.authenticate();

  if (response.resultCode === 0) {
    let { login, id, email } = response.data;
    dispatch(setAuthUserData(id, email, login));
  }
};

export const login = (formData) => async (dispatch) => {
  const response = await authAPI.login(formData);

  if (response.data.resultCode === 0) {
    dispatch(authenticate());
  } else {
    const message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};
export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.resultCode === 0) {
    dispatch(logoutAC());
  }
};

export default authReducer;
