import { UPDATE_NEW_POST_TEXT, ADD_NEW_POST } from "./types";

const initialState = {
  posts: [
    { id: 1, message: "This is a post" },
    { id: 2, message: "This is a post number 2" },
    { id: 3, message: "This is a post number 3" },
    { id: 4, message: "This is a post number 4" },
  ],
  newPostText: "",
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

    default:
      return state;
  }
};

export const addPostCreator = () => ({ type: ADD_NEW_POST });
export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  payload: text,
});

export default profileReducer;
