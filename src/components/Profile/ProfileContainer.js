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
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.myId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
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
  withRouter
)(ProfileContainer);
