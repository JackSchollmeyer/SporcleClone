import React from "react";
// import avatar from "./avatar.jpg";
import s from "../../../styles/Layout.module.css";
import { BellIcon } from "@heroicons/react/outline";

export default function Layout({ children }) {
  return (
    <div>
      <nav className={s.navbar}>
        <div className={s.directory}>
          <h2>Sporcle</h2>
          <ul>
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>Team</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Calender</a>
            </li>
          </ul>
        </div>
        <div className={s.navbarIcons}>
          <BellIcon className={s.bell} />
          {/* <img src={avatar} className={s.avatar} /> */}
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
