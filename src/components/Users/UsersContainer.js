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
    this.props.requestUsers(this.props.pageSize, this.props.currentPage);
  }

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.requestUsers(this.props.pageSize, this.props.currentPage);
  };
  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Loader />
        ) : (
          <Users
            currentPage={this.props.currentPage}
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
            onPageChanged={this.onPageChanged}
            isLoading={this.props.isLoading}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}
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
