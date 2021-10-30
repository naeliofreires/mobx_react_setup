import "./styles.css";

import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { useStore } from "./store/hooks";
import { LastValue } from "./components/LastValue";
import { TimerComponent } from "./components/Timer";
import { ResetButton } from "./components/ResetButton";

export default observer(() => {
  const timerStore = useStore("timer");

  useEffect(() => {
    setInterval(() => {
      timerStore.increaseTimer();
    }, 1000);
  }, [timerStore]);

  return (
    <>
      <div className="App">
        <h1>Bricando com MobX - New Setup</h1>
        <h5>@naeliofreires</h5>
      </div>
      <TimerComponent timer={timerStore.secondsPassed} />
      <ResetButton />
      <LastValue />
    </>
  );
});
