import { useState } from "react";
import s from "../../styles/Tickets.module.css";
import { ArrowDownIcon, MinusIcon } from "@heroicons/react/outline";
import CardStat from "../components/commons/CardStat";

export default function Tickets() {
  return (
    <div className={s.grid}>
      <CardStat title="Completed Quizzes" current={150} last={100} />
      <CardStat title="Erased Quizzes" current={70} last={60} />
      <CardStat title="Quizzes" current={51} last={51} />
      <CardStat title="Patient" current={122} last={128} />
    </div>
  );
}
