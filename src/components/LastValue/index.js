import React from "react";
import { useStore } from "../../store/hooks";

export const LastValue = () => {
  const timerStore = useStore("timer");

  return (
    <>
      <br />
      <div>
        <span>last value before updating: {timerStore.lastValue}</span>
      </div>
      <br />
    </>
  );
};
