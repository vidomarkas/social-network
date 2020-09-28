import React from "react";
import avatar from "../../assets/man.svg";
import styles from "./Users.module.scss";

export const Users = ({
  currentPage,
  users,
  totalUsersCount,
  pageSize,
  unfollowUser,
  followUser,
  onPageChanged,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <>
      <div className={styles.pagination}>
        {pages.map((i) => (
          <span
            key={i}
            className={currentPage === i ? styles.selectedPage : undefined}
            onClick={() => onPageChanged(i)}
          >
            {i}
          </span>
        ))}
      </div>
      <ul>
        {users.map((user) => (
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
              {user.photos.small ? (
                <img src={user.photos.small} alt={user.name + " photo"} />
              ) : (
                <img
                  style={{ height: "40px", margin: "20px 10px" }}
                  src={avatar}
                  alt="avatar"
                />
              )}
              <div>
                {user.followed ? (
                  <button onClick={() => unfollowUser(user.id)}>
                    Unfollow
                  </button>
                ) : (
                  <button onClick={() => followUser(user.id)}>Follow</button>
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
        ))}
      </ul>
    </>
  );
};
