import React from "react";
import Image from "next/image";
import avatar from "../../public/avatar.jpg";
import s from "../../../styles/Layout.module.css";
import { BellIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <nav className={s.navbar}>
        <div className={s.directory}>
          <h2>Sporcle</h2>
          <ul>
            <li>
              <Link href="/">
                <a>Dashboard</a>
              </Link>
            </li>
            <li>
              <Link href="/quizzes">
                <a>Quizzes</a>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <a>Profile</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={s.navbarIcons}>
          <BellIcon className={s.bell} />
          <div className={s.imageContainer}>
            <Image src={avatar} />
          </div>
        </div>
      </nav>
      <main className={s.main}>{children}</main>
    </div>
  );
}
