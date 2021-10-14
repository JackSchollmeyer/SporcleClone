import React from "react";
import s from "../../../styles/Tickets.module.css";
import {
  ArrowSmDownIcon,
  MinusSmIcon,
  ArrowSmUpIcon,
} from "@heroicons/react/outline";

export default function CardStat({ title, current, last }) {
  const change = Math.abs(Math.floor(((last - current) / last) * 100));

  console.log(current < last);

  const setIcon = () => {
    if (current < last) return <ArrowSmDownIcon className={s.downArrow} />;
    if (current > last) return <ArrowSmUpIcon className={s.upArrow} />;
    if (current === last) return <MinusSmIcon className={s.minusIcon} />;
  };

  const changeStyled = () => {
    if (current < last) return { backgroundColor: "rgba(250, 168, 168, 0.3)" };
    if (current > last) return { backgroundColor: "rgba(7, 161, 59, 0.2)" };
    if (current === last) return { backgroundColor: "rgb(250, 250, 250)" };
  };
  const changeTextStyled = () => {
    if (current < last) return { color: "rgb(180, 50, 50)" };
    if (current > last) return { color: "rgb(4, 119, 43)" };
    if (current === last) return { color: "black" };
  };

  return (
    <div className={s.boxes}>
      <h3>{title}</h3>
      <div className={s.data}>
        <p>
          <span>{current} </span>
          from {last}
        </p>
        <div className={s.percentage} style={changeStyled()}>
          {setIcon()}
          <p style={changeTextStyled()}>{change} %</p>
        </div>
      </div>
    </div>
  );
}
