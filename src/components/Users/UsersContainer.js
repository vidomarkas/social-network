import React, { Component } from "react";
import {
  followUser,
  unfollowUser,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
} from "../../redux/usersReducer";
import { connect } from "react-redux";
import { Users } from "./Users";
import Loader from "../Loader/Loader";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage);
  }

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.getUsers(this.props.pageSize, this.props.currentPage);
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
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isLoading: state.usersPage.isLoading,
  followingInProgress: state.usersPage.followingInProgress,
});

export default connect(mapStateToProps, {
  followUser,
  unfollowUser,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
})(UsersContainer);
