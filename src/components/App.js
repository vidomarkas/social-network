import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import { Header } from "./layout/Header/Header";
import { Main } from "./layout/Main/Main";
import { Sidebar } from "./layout/Sidebar/Sidebar";
import { Footer } from "./layout/Footer/Footer";
import { LandingPage } from "./pages/LandingPage/LandingPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/landing" component={LandingPage} />
        <div className="app-wrapper" path="/">
          <Header />
          <Sidebar />
          <Main />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
