import React, { Component } from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import axios from "axios";
import { setProfile, setProfileLoading } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends Component {
  componentDidMount() {
    const userId = this.props.match.params.userId;
    if (userId) {
      this.props.setProfileLoading(true);
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then((response) => {
          this.props.setProfile(response.data);
          this.props.setProfileLoading(false);
        })
        .catch((error) => {
          console.error(error);
          this.props.setProfileLoading(false);
        });
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

export default connect(mapStateToProps, { setProfile, setProfileLoading })(
  WithUrlDataContainerComponent
);
