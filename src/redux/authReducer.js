import { SET_USER_DATA, LOGIN, LOGOUT } from "./types";
import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isLoading: false,
  isAuthenticated: false,
};

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

export const authenticate = () => (dispatch) => {
  authAPI.authenticate().then((response) => {
    if (response.resultCode === 0) {
      let { login, id, email } = response.data;
      dispatch(setAuthUserData(id, email, login));
    }
  });
};
export const login = (formData) => (dispatch) => {
  authAPI.login(formData).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(authenticate());
    } else {
      const message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  });
};
export const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.resultCode === 0) {
      dispatch(logoutAC());
    }
  });
};

export default authReducer;
