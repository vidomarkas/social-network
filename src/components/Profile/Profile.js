import React from "react";
import Loader from "../Loader/Loader";

import { MyPostsContainer } from "../Posts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";

export const Profile = ({ profile, isLoading }) => {
  if (!profile && isLoading) {
    return <Loader />;
  } else if (!profile && !isLoading) {
    return <div>Profile not found</div>;
  }
  return (
    <>
      <ProfileInfo profile={profile} />
      <div className="content__posts">
        <MyPostsContainer />
      </div>
    </>
  );
};
