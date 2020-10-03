import React from "react";
import avatar from "../../assets/man.svg";
import s from "./Profile.module.scss";
import Loader from "../Loader/Loader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({ profile }) => {
  return (
    <>
      {profile ? (
        <>
          <div className={s.profile}>
            <img
              className={s.profileImage}
              src={profile.photos.small ? profile.photos.small : avatar}
              alt="profile img"
            />
            <div className={s.profileInfo}>
              <h1>{profile.fullName}</h1>
              <ProfileStatus status="helloooo" />
              <p>{profile.aboutMe}</p>

              {profile.lookingForAJob ? (
                <p>Open for job opportunities</p>
              ) : null}
              {<p>{profile.lookingForAJobDescription}</p>}

              <p style={{ fontWeight: "bold" }}>Ways to contact:</p>
              <ul>
                {Object.keys(profile.contacts).map((contact, i) =>
                  profile.contacts[contact] ? (
                    <li key={i}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={profile.contacts[contact]}
                      >
                        {contact}
                      </a>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ProfileInfo;
