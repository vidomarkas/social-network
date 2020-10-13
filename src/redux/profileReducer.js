import { usersAPI, profileAPI } from "../api/api";

const ADD_NEW_POST = "profile/ADD_NEW_POST";
const SET_PROFILE = "profile/SET_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const DELETE_POST = "profile/DELETE_POST";
const SET_PROFILE_LOADING = "profile/SET_PROFILE_LOADING";

const initialState = {
  posts: [
    { id: 1, message: "This is a post" },
    { id: 2, message: "This is a post number 2" },
    { id: 3, message: "This is a post number 3" },
    { id: 4, message: "This is a post number 4" },
  ],
  profile: null,
  isLoading: false,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      const newPost = {
        id: 5,
        message: action.newPost,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case SET_PROFILE:
      return { ...state, profile: action.profile };
    case SET_PROFILE_LOADING:
      return { ...state, isLoading: action.isLoading };
    case SET_STATUS:
      return { ...state, status: action.status };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.id),
      };
    default:
      return state;
  }
};

export const addPost = (newPost) => ({ type: ADD_NEW_POST, newPost });
export const deletePost = (id) => ({ type: DELETE_POST, id });
export const setProfileSuccess = (profile) => ({ type: SET_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const setProfileLoading = (isLoading) => ({
  type: SET_PROFILE_LOADING,
  isLoading,
});

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export const getUserProfile = (userId) => (dispatch) => {
  dispatch(setProfileLoading(true));
  usersAPI.getProfile(userId).then((data) => {
    dispatch(setProfileSuccess(data));
    dispatch(setProfileLoading(false));
  });
};

export default profileReducer;
