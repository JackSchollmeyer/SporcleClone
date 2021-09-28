import React, { useState } from "react";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(0);

  const handleToggle = (tab) => {
    setShowLogin(tab);
  };
  return (
    <div>
      <div>
        <p onClick={() => handleToggle(0)}> Log in</p>
        <p onClick={() => handleToggle(1)}>Sign up</p>
      </div>
      <div>
        {/* <img /> This is where the image would go */}
        {showLogin === 0 && <Login />}
        {showLogin === 1 && <Signup />}
      </div>
      {/* button */}
    </div>
  );
}
