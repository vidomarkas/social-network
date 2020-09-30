import { SET_USER_DATA } from "./types";

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

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { email, userId, login },
});

export default authReducer;
