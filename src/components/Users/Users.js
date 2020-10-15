import React from "react";
import Pagination from "../common/Pagination/Pagination";
import { User } from "./User";

export const Users = ({
  currentPage,
  users,
  totalUsersCount,
  pageSize,
  unfollowUser,
  followUser,
  onPageChanged,
  followingInProgress,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          total={pagesCount}
          current={currentPage}
          onChange={onPageChanged}
        />
      </div>
      <>
        <ul>
          {users.map((user) => (
            <User
              key={user.id}
              user={user}
              followingInProgress={followingInProgress}
              unfollowUser={unfollowUser}
              followUser={followUser}
            />
          ))}
        </ul>
      </>
    </>
  );
};
