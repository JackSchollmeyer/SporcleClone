import React, { useState } from "react";
import Input from "../../commons/input.jsx";
import s from "../../../../styles/Auth.module.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <div className={s.title}>
      <Input
        label="Name"
        value={name}
        handleChange={(e) => setName(e.target.value)}
      />
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
      <Input
        label="Confirm Password"
        value={confirm}
        handleChange={(e) => setConfirm(e.target.value)}
      />
      <button className={s.loginButton}>Sign Up</button>
    </div>
  );
}
