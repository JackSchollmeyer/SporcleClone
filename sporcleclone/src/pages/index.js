import { useState } from "react";
import s from "../../styles/Tickets.module.css";
import { ArrowDownIcon, MinusIcon } from "@heroicons/react/outline";
import CardStat from "../components/commons/CardStat";

export default function Tickets() {
  return (
    <div className={s.grid}>
      <CardStat
        title="Completed Quizzes"
        current={0}
        last=" from 0"
        change="0%"
      />
      <CardStat title="Erased Quizzes" current={0} last=" from 0" change="0%" />
      <CardStat title="Quizzes" current={122} last=" from 129" change="-5%" />
      <CardStat title="Patient" current={127} last=" from 124" change="2%" />
    </div>
  );
}
