import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/brands.svg";
import s from "./Header.module.scss";

export const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logoBox}>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <a href="/">
          <h1 className={s.name}>Social Network</h1>
        </a>
      </div>
      <div className={s.loginBlock}>
        {props.isAuthenticated ? (
          <p>{props.login}</p>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </header>
  );
};
