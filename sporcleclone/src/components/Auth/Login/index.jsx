import React from "react";
import Inputs from "../../../../styles/Inputs.module.css";

export default function Login() {
  return (
    <div className={Inputs.title}>
      <form className={Inputs.spacing}>
        <label>
          Email
          <input className={Inputs.boxes}></input>
        </label>
      </form>
      <form className={Inputs.spacing}>
        <label>
          Password
          <input className={Inputs.boxes}></input>
        </label>
      </form>
      <button className={Inputs.login}>Login</button>
    </div>
  );
}
