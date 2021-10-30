import { makeAutoObservable } from "mobx";

export class Timer {
  secondsPassed = 0;
  lastValue = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.secondsPassed += 1;
  }

  resetTimer() {
    this.lastValue = this.secondsPassed;
    this.secondsPassed = 0;
  }
}
