import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/brands.svg";
import s from "./Header.module.scss";

export const Header = () => {
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
      <div>
        <Link to="/landing">Logout</Link>
      </div>
    </header>
  );
};
