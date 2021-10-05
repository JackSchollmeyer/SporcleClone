import React, { useState } from "react";
import Image from "next/image";
import pineTrees from "../public/pinetree.jpg";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import s from "../../styles/Auth.module.css";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(0);

  const loginStyled =
    showLogin === 0
      ? { color: "black", borderBottom: "solid 3px" }
      : { color: "rgb(144, 143, 145)" };

  const singupStyled =
    showLogin === 1
      ? { color: "black", borderBottom: "solid 3px" }
      : { color: "rgb(144, 143, 145)" };

  const handleToggle = (tab) => {
    setShowLogin(tab);
  };

  return (
    <div className={s.authContainer}>
      <div className={s.img}>
        <Image src={pineTrees} alt="Picture of the author" />
      </div>
      <div className={s.case}>
        <div className={s.switch}>
          <p onClick={() => handleToggle(0)} style={loginStyled}>
            Login
          </p>
          <p onClick={() => handleToggle(1)} style={singupStyled}>
            Sign up
          </p>
        </div>
        <div>
          {showLogin === 0 && <Login />}
          {showLogin === 1 && <Signup />}
        </div>
      </div>
    </div>
  );
}
