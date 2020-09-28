import React from "react";
import headerImg from "../../assets/header.jpg";
import profileImg from "../../assets/profile-img.jpg";
import s from "./Profile.module.scss";
import Loader from "../Loader/Loader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />;
  }
  return (
    <>
      <div
        style={{ backgroundImage: `url(${headerImg})` }}
        className={s.backgroundImage}
      ></div>

      <div className={s.profile}>
        <img
          className={s.profileImage}
          src={props.profile ? props.profile.photos.small : profileImg}
          alt="profile img"
        />
        <div className={s.profileInfo}>
          {props.profile && <h1>{props.profile.fullName}</h1>}
          {props.profile && <p>{props.profile.aboutMe}</p>}
          {props.profile && props.profile.lookingForAJob ? (
            <p>Open for job opportunities</p>
          ) : null}
          {props.profile && <p>{props.profile.lookingForAJobDescription}</p>}
          <p style={{ fontWeight: "bold" }}>Ways to contact:</p>
          {props.profile && (
            <ul>
              {Object.keys(props.profile.contacts).map((contact) =>
                props.profile.contacts[contact] ? (
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={props.profile.contacts[contact]}
                    >
                      {contact}
                    </a>
                  </li>
                ) : null
              )}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
