import { useState } from "react";
import s from "../../styles/Tickets.module.css";
import { ArrowDownIcon, MinusIcon } from "@heroicons/react/outline";

export default function Tickets() {
  return (
    <div className={s.grid}>
      <div className={s.boxes}>
        <h3>Completed Quizzes</h3>
        <div className={s.data}>
          <p>
            <span>0</span> from 0
          </p>
          <div className={s.percentage}>
            <MinusIcon className={s.minusIcon} />
            <p>0%</p>
          </div>
        </div>
      </div>
      <div className={s.boxes}>
        <h3>Erased Quizzes</h3>
        <div className={s.data}>
          <p>
            <span>0</span> from 0
          </p>
          <div className={s.percentage}>
            <MinusIcon className={s.minusIcon} />
            <p>0%</p>
          </div>
        </div>
      </div>
      <div className={s.boxes}>
        <h3>Quizzes</h3>
        <div className={s.data}>
          <p>
            <span>122</span> from 129
          </p>
          <div className={s.percentage}>
            <ArrowDownIcon className={s.downArrow} />
            <p>5%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
