import { INITIALIZED_SUCCESS } from "./types";
import { authenticate } from "./authReducer";

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initialized: true };

    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(authenticate());

  Promise.all([promise]).then(() => dispatch(initializedSuccess()));
};

export default appReducer;
