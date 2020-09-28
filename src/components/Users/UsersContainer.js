import React, { Component } from "react";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
} from "../../redux/usersReducer";
import { connect } from "react-redux";
import { Users } from "./Users";
import axios from "axios";

class UsersContainer extends Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
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
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    return (
      <Users
        currentPage={this.props.currentPage}
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        followUser={this.onFollowUser}
        unfollowUser={this.onUnfollowUser}
        onPageChanged={this.onPageChanged}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
});
const mapDispatchToProps = (dispatch) => ({
  followUser: (userId) => dispatch(followAC(userId)),
  unfollowUser: (userId) => dispatch(unfollowAC(userId)),
  setUsers: (users) => dispatch(setUsersAC(users)),
  setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
  setTotalUsersCount: (count) => dispatch(setTotalUsersCountAC(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
