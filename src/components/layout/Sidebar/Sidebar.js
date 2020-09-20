import React from "react";
import { Link } from "react-router-dom";

import s from "./Sidebar.module.scss";

export const Sidebar = () => {
  return (
    <nav className={s.sidebar}>
      <ul>
        <li>
          <Link to="/feed">Feed</Link>
        </li>
        <li>
          <Link to="/messages">Messages</Link>
        </li>
        <li>
          <Link to="/myprofile">My profile</Link>
        </li>
        <li>
          <Link to="/friends">Friends</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};
