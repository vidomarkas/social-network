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
          <Link to="/dialogs">Dialogs</Link>
        </li>

        <li>
          <Link to="/users">Find users</Link>
        </li>
        <Link to={"/profile/" + 11754}>My profile</Link>
        {/* <li>
          <Link to="/friends">Friends</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li> */}
      </ul>
    </nav>
  );
};
