import React, { createRef } from "react";
import { Post } from "./Post";

export const MyPosts = (props) => {
  const newPostElement = createRef();

  const onAddPost = (e) => {
    e.preventDefault();
    props.addPost();
    props.updateNewPostText("");
  };

  const onPostChange = (e) => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div>
        <h2> New post</h2>
        <form action="">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            ref={newPostElement}
            value={props.newPostText}
            onChange={onPostChange}
          ></textarea>
          <button onClick={onAddPost} type="submit">
            Post
          </button>
        </form>
      </div>
      <h2>My posts</h2>
      <ul>
        {props.posts.map((post) => (
          <Post key={post.id} message={post.message} />
        ))}
      </ul>
    </div>
  );
};
