import React from "react";
import {
  updateNewPostTextCreator,
  addPostCreator,
} from "../../redux/profileReducer";
import { MyPosts } from "./MyPosts";

export const MyPostsContainer = (props) => {
  let state = props.store.getState();
  const addPost = () => {
    props.store.dispatch(addPostCreator());
  };

  const onPostChange = (text) => {
    let action = updateNewPostTextCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};
