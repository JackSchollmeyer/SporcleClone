import React, { useState } from "react";
import Input from "../../commons/input.jsx";
import s from "../../../../styles/Auth.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={s.title}>
      <Input
        label="Email"
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Password"
        value={password}
        handleChange={(e) => setPassword(e.target.value)}
      />
      <button className={s.loginButton}>Login</button>
    </div>
  );
}
