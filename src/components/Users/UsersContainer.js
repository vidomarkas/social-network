import React, { Component } from "react";
import {
  followUser,
  unfollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setLoading,
} from "../../redux/usersReducer";
import { connect } from "react-redux";
import { Users } from "./Users";
import axios from "axios";
import Loader from "../Loader/Loader";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.setLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
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
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
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
});
// const mapDispatchToProps = (dispatch) => ({
//   followUser: (userId) => dispatch(followAC(userId)),
//   unfollowUser: (userId) => dispatch(unfollowAC(userId)),
//   setUsers: (users) => dispatch(setUsersAC(users)),
//   setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
//   setTotalUsersCount: (count) => dispatch(setTotalUsersCountAC(count)),
//   setLoading: (loading) => dispatch(setLoadingAC(loading)),
// });

export default connect(mapStateToProps, {
  followUser,
  unfollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setLoading,
})(UsersContainer);
