import { SET_USER_DATA, LOGIN } from "./types";
import { authAPI } from "../api/api";

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
      return { ...state, ...action.data, isAuthenticated: true };
    case LOGIN:
      return { ...state, userId: action.userId, isAuthenticated: true };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { email, userId, login },
});
export const loginAC = (userId) => ({
  type: LOGIN,
  userId,
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
      let { userId } = response.data;
      dispatch(loginAC(userId));
    }
  });
};

export default authReducer;
