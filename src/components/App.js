import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import s from "./App.module.scss";
import HeaderContainer from "./Header/HeaderContainer";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import { Feed } from "./Feed/Feed";
import ProfileContainer from "./Profile/ProfileContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import Login from "./Login/Login";
import { initializeApp } from "../redux/appReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import spinner from "../assets/spinner.gif";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    return (
      <div className={s.appWrapper}>
        {this.props.initialized ? (
          <>
            <HeaderContainer />
            <Sidebar />
            <Route path="/">
              <main className={s.main}>
                <Route exact path="/feed" component={Feed} />
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route
                  path="/profile/:userId?"
                  render={() => <ProfileContainer />}
                />
                <Route path="/users" render={() => <UsersContainer />} />
                <Route path="/login" render={() => <Login />} />
              </main>
              <Footer />
            </Route>
          </>
        ) : (
          <img src={spinner} alt="loading" />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
