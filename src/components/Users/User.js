import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/man.svg";

export const User = ({
  user,
  followingInProgress,
  unfollowUser,
  followUser,
}) => {
  return (
    <li
      key={user.id}
      style={{
        border: "2px solid rgb(22, 88, 175)",
        marginBottom: "10px",
        display: "flex",
        padding: "10px",
      }}
    >
      <div>
        <Link to={"/profile/" + user.id}>
          {user.photos.small ? (
            <img
              style={{ height: "40px", margin: "20px 10px" }}
              src={user.photos.small}
              alt={user.name + " photo"}
            />
          ) : (
            <img
              style={{ height: "40px", margin: "20px 10px" }}
              src={avatar}
              alt="avatar"
            />
          )}
        </Link>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollowUser(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                followUser(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "20px" }}>
          <p>{user.name}</p>
        </div>
        {user.status ? (
          <div
            style={{
              border: "1px solid #eee",
              borderRadius: "10px",
              padding: "10px",
              marginLeft: "30px",
              display: "flex",
              alignItems: "center",
              height: "40px",
            }}
          >
            <p>{user.status}</p>
          </div>
        ) : null}
      </div>
    </li>
  );
};
