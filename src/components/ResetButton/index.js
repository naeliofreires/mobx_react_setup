import React, { useCallback } from "react";
import { useStore } from "../../store/hooks";

export const ResetButton = () => {
  const timerStore = useStore("timer");

  const onReset = useCallback(() => {
    timerStore.resetTimer();
  }, [timerStore]);

  return (
    <div>
      <button onClick={onReset}>reset the time</button>
    </div>
  );
};
