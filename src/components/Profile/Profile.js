import React from "react";
import { MyPostsContainer } from "../Posts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";

export const Profile = (props) => {
  return (
    <>
      <ProfileInfo {...props} />
      <div className="content__posts">
        <MyPostsContainer />
      </div>
    </>
  );
};
