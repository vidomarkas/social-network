import React, { Component } from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import {
  getUserProfile,
  setProfileLoading,
  getStatus,
  updateStatus,
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends Component {
  componentDidMount() {
    const userId = this.props.match.params.userId;
    if (userId) {
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);
    } else {
      this.props.getUserProfile(this.props.myId);
      this.props.getStatus(this.props.myId);
    }
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isLoading: state.profilePage.isLoading,
  status: state.profilePage.status,
  myId: state.auth.userId,
});

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    setProfileLoading,
    getStatus,
    updateStatus,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
