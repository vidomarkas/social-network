import { usersAPI, profileAPI } from "../api/api";

import {
  UPDATE_NEW_POST_TEXT,
  ADD_NEW_POST,
  SET_PROFILE,
  SET_PROFILE_LOADING,
  SET_STATUS,
} from "./types";

const initialState = {
  posts: [
    { id: 1, message: "This is a post" },
    { id: 2, message: "This is a post number 2" },
    { id: 3, message: "This is a post number 3" },
    { id: 4, message: "This is a post number 4" },
  ],
  newPostText: "",
  profile: null,
  isLoading: false,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.payload,
      };
    case ADD_NEW_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    case SET_PROFILE:
      return { ...state, profile: action.profile };
    case SET_PROFILE_LOADING:
      return { ...state, isLoading: action.isLoading };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_NEW_POST });
export const setProfileSuccess = (profile) => ({ type: SET_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  payload: text,
});
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
  });
  dispatch(setProfileLoading(false));
};

export default profileReducer;
