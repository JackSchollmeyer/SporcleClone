import React from "react";
import s from "../../../styles/Button.module.css";

export default function Button({ text, action }) {
  return (
    <button className={s.button} onClick={action}>
      {text}
    </button>
  );
}
