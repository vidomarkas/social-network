import React, { Component } from "react";
import {
  followUser,
  unfollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setLoading,
  toggleFollowingProgress,
} from "../../redux/usersReducer";
import { connect } from "react-redux";
import { Users } from "./Users";
import Loader from "../Loader/Loader";
import { usersAPI } from "../../api/api";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.setLoading(true);
    usersAPI
      .getUsers(this.props.pageSize, this.props.currentPage)
      .then((response) => {
        this.props.setUsers(response.items);
        this.props.setTotalUsersCount(response.totalCount);
        this.props.setLoading(false);
      });
  }

  onFollowUser = (userId) => {
    this.props.followUser(userId);
  };
  onUnfollowUser = (userId) => {
    this.props.unfollowUser(userId);
  };

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.setLoading(true);
    usersAPI.getUsers(this.props.pageSize, currentPage).then((response) => {
      this.props.setUsers(response.items);
      this.props.setLoading(false);
    });
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
            followUser={this.onFollowUser}
            unfollowUser={this.onUnfollowUser}
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
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setLoading,
  toggleFollowingProgress,
})(UsersContainer);
