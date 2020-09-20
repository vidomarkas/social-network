import React from "react";
import landingBackground from "../../../assets/landing.jpg";
import s from "./LandingPage.module.scss";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${landingBackground})` }}
        className={s.background}
      ></div>
      <div className={s.header}>
        <h1 className={s.heading}>Social Network</h1>
        <Link to="/">Login</Link>
        <Link to="/">Sign Up</Link>
      </div>
    </>
  );
};
