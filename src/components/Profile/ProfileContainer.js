import React, { Component } from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import { getUserProfile, setProfileLoading } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isLoading: state.profilePage.isLoading,
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile, setProfileLoading })(
  WithUrlDataContainerComponent
);
