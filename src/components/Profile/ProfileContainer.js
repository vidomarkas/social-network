import React, { Component } from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import { getUserProfile, setProfileLoading } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends Component {
  componentDidMount() {
    const userId = this.props.match.params.userId;
    if (userId) {
      this.props.getUserProfile(userId);
    }
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isLoading: state.profilePage.isLoading,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile, setProfileLoading })(
  WithUrlDataContainerComponent
);
