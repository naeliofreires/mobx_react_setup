import { observer } from "mobx-react-lite";

export const TimerComponent = observer(({ timer }) => {
  return <span>Seconds passed: {timer}</span>;
});
