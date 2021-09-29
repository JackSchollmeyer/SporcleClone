import React from "react";
import s from "../../../styles/inputs.module.css";

export default function Input({
  label,
  placeholder,
  type,
  value,
  handleChange,
}) {
  return (
    <div className={s.spacing}>
      <label>
        {label}
        <input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={handleChange}
          className={s.boxes}
        ></input>
      </label>
    </div>
  );
}
