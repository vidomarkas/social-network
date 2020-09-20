import React from "react";
import { Post } from "./Post";

export const MyPosts = () => {
  return (
    <div>
      <h2>My posts</h2>
      <ul>
        <Post />
        <Post />
        <Post />
        <Post />
      </ul>
    </div>
  );
};
