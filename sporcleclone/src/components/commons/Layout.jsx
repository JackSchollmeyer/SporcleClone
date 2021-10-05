import React from "react";
import s from "../../../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <nav className={s.navbar}>
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
      </nav>
      <main>{children}</main>
    </div>
  );
}
