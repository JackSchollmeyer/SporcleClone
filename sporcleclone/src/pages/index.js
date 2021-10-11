import { useState } from "react";
import s from "../../styles/Tickets.module.css";
import { ArrowDownIcon, MinusIcon } from "@heroicons/react/outline";
import CardStat from "../components/commons/CardStat";

export default function Tickets() {
  const randomNumbers = (maxNum) => {
    return {
      currentStat: Math.floor(Math.random() * maxNum),
      lastStat: Math.floor(Math.random() * maxNum),
    };
  };

  const completedStats = randomNumbers(150);
  const erasedStats = randomNumbers(150);
  const quizStats = randomNumbers(150);
  const patientStats = randomNumbers(150);

  const completedPercentage = Math.floor(
    (completedStats.currentStat / completedStats.lastStat - 1) * 100
  );

  const erasedPercentage = Math.floor(
    (erasedStats.currentStat / erasedStats.lastStat - 1) * 100
  );

  const quizPercentage = Math.floor(
    (quizStats.currentStat / quizStats.lastStat - 1) * 100
  );

  const patientPercentage = Math.floor(
    (patientStats.currentStat / patientStats.lastStat - 1) * 100
  );

  return (
    <div className={s.grid}>
      <CardStat
        title="Completed Quizzes"
        current={completedStats.currentStat}
        last={completedStats.lastStat}
        change={completedPercentage}
      />
      <CardStat
        title="Erased Quizzes"
        current={erasedStats.currentStat}
        last={erasedStats.lastStat}
        change={erasedPercentage}
      />
      <CardStat
        title="Quizzes"
        current={quizStats.currentStat}
        last={quizStats.lastStat}
        change={quizPercentage}
      />
      <CardStat
        title="Patient"
        current={patientStats.currentStat}
        last={patientStats.lastStat}
        change={patientPercentage}
      />
    </div>
  );
}
