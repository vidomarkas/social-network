import React, { Component, Suspense } from "react";
import { Route, withRouter, BrowserRouter } from "react-router-dom";
import { compose } from "redux";
import { connect, Provider } from "react-redux";
import { store } from "../../redux/reduxStore";
import s from "./App.module.scss";
import HeaderContainer from "../Header/HeaderContainer";
// import ProfileContainer from "../Profile/ProfileContainer";
// import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import { Sidebar } from "../Sidebar/Sidebar";
import { Feed } from "../Feed/Feed";
import Login from "../Login/Login";
import { Footer } from "../Footer/Footer";
import { initializeApp } from "../../redux/appReducer";
import spinner from "../../assets/spinner.gif";
import { withSuspense } from "../../hoc/withSuspense";

const DialogsContainer = React.lazy(() =>
  import("../Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("../Profile/ProfileContainer")
);

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
                <Route exact path="/feed" render={() => <Feed />} />
                <Route
                  path="/dialogs"
                  render={withSuspense(DialogsContainer)}
                />
                <Route
                  path="/profile/:userId?"
                  render={withSuspense(ProfileContainer)}
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

export const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

export const MainApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
