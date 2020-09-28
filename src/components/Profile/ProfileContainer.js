import React, { Component } from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import axios from "axios";
import { setProfile } from "../../redux/profileReducer";

class ProfileContainer extends Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
      .then((response) => {
        console.log("response.data :>> ", response.data);
        this.props.setProfile(response.data);
        // this.props.setTotalUsersCount(response.data.totalCount);
        // this.props.setLoading(false);
      });
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setProfile })(ProfileContainer);
