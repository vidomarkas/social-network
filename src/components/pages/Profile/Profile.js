import React from "react";
import headerImg from "../../../assets/header.jpg";
import profileImg from "../../../assets/profile-img.jpg";
import { MyPosts } from "../../Posts/MyPosts";
import { NewPost } from "../../Posts/NewPost";
import s from "./Profile.module.scss";

export const Profile = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${headerImg})` }}
        className={s.backgroundImage}
      ></div>

      <div className={s.profile}>
        <img className={s.profileImage} src={profileImg} alt="profile img" />
        <div className={s.profileInfo}>
          <h1>Robert Patterson</h1>
          <p>Date of birth: January 31</p>
          <p>City: London</p>
          <p>Education: University of Bristol</p>
          <p>Relationship status: In relationship</p>
        </div>
      </div>
      <div className="content__posts">
        <NewPost />
        <MyPosts />
      </div>
    </>
  );
};
