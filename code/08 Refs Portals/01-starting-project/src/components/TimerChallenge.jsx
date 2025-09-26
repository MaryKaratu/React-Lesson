import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dailog = useRef();
  const [timerRemaining, setTimerRemaining] = useState(targetTime * 1000);

  const timerIsActive =
    timerRemaining > 0 && timerRemaining < targetTime * 1000;

  if (timerRemaining <= 0) {
    clearInterval(timer.current);
    setTimerRemaining(targetTime * 1000);
    dailog.current.open();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimerRemaining((prevTime) => prevTime - 10);
    }, 10);
  }

  function handleStop() {
    dailog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dailog} targetTime={targetTime} result="lost" />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
