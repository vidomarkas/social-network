import React from "react";
import headerImg from "../../assets/header.jpg";
import profileImg from "../../assets/profile-img.jpg";
import { MyPostsContainer } from "../Posts/MyPostsContainer";
import s from "./Profile.module.scss";

export const Profile = (props) => {
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
        <MyPostsContainer store={props.store} />
      </div>
    </>
  );
};
