import React from "react";
import s from "../../../styles/Tickets.module.css";
import {
  ArrowSmDownIcon,
  MinusSmIcon,
  ArrowSmUpIcon,
} from "@heroicons/react/outline";

export default function CardStat({ title, current, last, change }) {
  const setIcon =
    change === "0%" ? (
      <MinusSmIcon className={s.minusIcon} />
    ) : change === "-5%" ? (
      <ArrowSmDownIcon className={s.downArrow} />
    ) : change === "2%" ? (
      <ArrowSmUpIcon className={s.upArrow} />
    ) : (
      ""
    );

  const changeStyled =
    change === "-5%"
      ? { backgroundColor: "rgba(250, 168, 168, 0.3)" }
      : change === "2%"
      ? { backgroundColor: "rgba(7, 161, 59, 0.2)" }
      : { backgroundColor: "rgb(250, 250, 250)" };

  const changeTextStyled =
    change === "-5%"
      ? { color: "rgb(180, 50, 50)" }
      : change === "2%"
      ? { color: "rgb(4, 119, 43)" }
      : { color: "black" };

  return (
    <div className={s.boxes}>
      <h3>{title}</h3>
      <div className={s.data}>
        <p>
          <span>{current}</span>
          {last}
        </p>
        <div className={s.percentage} style={changeStyled}>
          {setIcon}
          <p style={changeTextStyled}>{change}</p>
        </div>
      </div>
    </div>
  );
}
