import React from "react";
import { Switch, Route } from "react-router-dom";
import s from "./Main.module.scss";
import { Feed } from "../../pages/Feed/Feed";
import { Profile } from "../../pages/Profile/Profile";
import { Dialogs } from "../../pages/Dialogs/Dialogs";

export const Main = () => {
  return (
    <main className={s.main}>
      <Switch>
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/myprofile" component={Profile} />
        <Route exact path="/messages" component={Dialogs} />
      </Switch>
    </main>
  );
};
