import React, { useState } from "react";
import Inputs from "../../../../styles/Inputs.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={Inputs.title}>
      <h1>{JSON.stringify(email)}</h1>
      <form className={Inputs.spacing}>
        <label>
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={Inputs.boxes}
          ></input>
        </label>
      </form>
      <form className={Inputs.spacing}>
        <label>
          Password
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={Inputs.boxes}
          ></input>
        </label>
      </form>
      <button className={Inputs.login}>Login</button>
    </div>
  );
}
