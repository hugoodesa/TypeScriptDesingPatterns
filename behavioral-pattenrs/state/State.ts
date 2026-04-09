import { CarState } from "./CarState";

export abstract class State {
  constructor(public car: CarState) {}

  abstract startEngine(): string;
  abstract turnOffEngine(): string;
  abstract acelerate(): string;
  abstract break(): string;
}
