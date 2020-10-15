import React, { Component } from "react";
import {
  followUser,
  unfollowUser,
  setCurrentPage,
  toggleFollowingProgress,
  requestUsers,
} from "../../redux/usersReducer";
import { connect } from "react-redux";
import { Users } from "./Users";
import Loader from "../common/Loader/Loader";
import {
  getPageSize,
  getPageSitotalUsersCount,
  getCurrentPage,
  getIsLoading,
  getFollowingInProgress,
  getUsers,
} from "../../redux/usersReselect";

class UsersContainer extends Component {
  componentDidMount() {
    const { requestUsers, pageSize, currentPage } = this.props;
    requestUsers(pageSize, currentPage);
  }

  onPageChanged = (currentPage) => {
    const { requestUsers, setCurrentPage, pageSize } = this.props;
    setCurrentPage(currentPage);
    requestUsers(pageSize, currentPage);
  };

  render() {
    const {
      isLoading,
      currentPage,
      users,
      totalUsersCount,
      pageSize,
      followUser,
      unfollowUser,
      toggleFollowingProgress,
      followingInProgress,
    } = this.props;
    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <Users
            currentPage={currentPage}
            users={users}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            followUser={followUser}
            unfollowUser={unfollowUser}
            onPageChanged={this.onPageChanged}
            isLoading={isLoading}
            toggleFollowingProgress={toggleFollowingProgress}
            followingInProgress={followingInProgress}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: getPageSitotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isLoading: getIsLoading(state),
  followingInProgress: getFollowingInProgress(state),
});

export default connect(mapStateToProps, {
  followUser,
  unfollowUser,
  setCurrentPage,
  toggleFollowingProgress,
  requestUsers,
})(UsersContainer);
