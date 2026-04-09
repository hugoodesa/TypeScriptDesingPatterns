import { AcelerateState } from "./AcelerateState";
import { CarState } from "./CarState";
import { StartEngineState } from "./StartEngineState";
import { State } from "./State";
import { TurnOffEngineState } from "./TurnOffEngineState";

export class BreakState extends State {
  constructor(public carState: CarState) {
    super(carState);
  }
  startEngine(): string {
    this.carState.changeState(new StartEngineState(this.carState));

    return "car already working";
  }
  turnOffEngine(): string {
    this.carState.changeState(new TurnOffEngineState(this.carState));

    return "Turn of the car";
  }
  acelerate(): string {
    this.carState.changeState(new AcelerateState(this.carState));

    return "can acelerate";
  }
  break(): string {
    this.carState.changeState(new BreakState(this.carState));

    return "Slow down";
  }
}
