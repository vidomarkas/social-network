import React, { Component } from "react";
import { connect } from "react-redux";
import { authenticate } from "../../redux/authReducer";
import { Header } from "./Header";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.authenticate();
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  login: state.auth.login,
});

export default connect(mapStateToProps, { authenticate })(HeaderContainer);
