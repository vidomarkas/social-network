import { authenticate } from "./authReducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

// Initial state
const initialState = {
  initialized: false,
};

// Reducer
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initialized: true };

    default:
      return state;
  }
};

// Action creators
export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

// Thunks
export const initializeApp = () => (dispatch) => {
  let promise = dispatch(authenticate());

  Promise.all([promise]).then(() => dispatch(initializedSuccess()));
};

export default appReducer;
