import React from "react";
import headerImg from "../../assets/header.jpg";
import avatar from "../../assets/man.svg";
import s from "./Profile.module.scss";

const ProfileInfo = ({ profile }) => {
  return (
    <>
      {profile && (
        <>
          <div
            style={{ backgroundImage: `url(${headerImg})` }}
            className={s.backgroundImage}
          ></div>

          <div className={s.profile}>
            <img
              className={s.profileImage}
              src={profile.photos.small ? profile.photos.small : avatar}
              alt="profile img"
            />
            <div className={s.profileInfo}>
              <h1>{profile.fullName}</h1>
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
      )}
    </>
  );
};

export default ProfileInfo;
