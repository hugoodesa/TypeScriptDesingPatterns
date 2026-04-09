import { BreakState } from "./BreakState";
import { CarState } from "./CarState";
import { StartEngineState } from "./StartEngineState";
import { State } from "./State";
import { TurnOffEngineState } from "./TurnOffEngineState";

export class AcelerateState extends State {
  constructor(public carState: CarState) {
    super(carState);
  }
  startEngine(): string {
    this.carState.changeState(new StartEngineState(this.carState));
    return "car already working";
  }
  turnOffEngine(): string {
    this.carState.changeState(new TurnOffEngineState(this.carState));
    return "can do this";
  }
  acelerate(): string {
    this.carState.changeState(new AcelerateState(this.carState));

    return "Acelerate more";
  }
  break(): string {
    this.carState.changeState(new BreakState(this.carState));
    return "Slow down";
  }
}
