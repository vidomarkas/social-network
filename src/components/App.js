import React from "react";
import { Route } from "react-router-dom";
import s from "./App.module.scss";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
// import { Feed } from "./Feed/Feed";
import { Profile } from "./Profile/Profile";
import { DialogsContainer } from "./Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <div className={s.appWrapper}>
      <Header />
      <Sidebar />
      <Route path="/">
        <main className={s.main}>
          {/* <Route exact path="/feed" component={Feed} /> */}
          <Route
            path="/dialogs"
            render={() => <DialogsContainer store={props.store} />}
          />
          <Route
            path="/myprofile"
            render={() => <Profile store={props.store} />}
          />
        </main>
        <Footer />
      </Route>
    </div>
  );
};

export default App;
