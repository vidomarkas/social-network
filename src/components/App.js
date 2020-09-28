import React from "react";
import { Route } from "react-router-dom";
import s from "./App.module.scss";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import { Feed } from "./Feed/Feed";
import { Profile } from "./Profile/Profile";
import { DialogsContainer } from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";

const App = (props) => {
  return (
    <div className={s.appWrapper}>
      <Header />
      <Sidebar />
      <Route path="/">
        <main className={s.main}>
          <Route exact path="/feed" component={Feed} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/myprofile" render={() => <Profile />} />
          <Route path="/users" render={() => <UsersContainer />} />
        </main>
        <Footer />
      </Route>
    </div>
  );
};

export default App;
