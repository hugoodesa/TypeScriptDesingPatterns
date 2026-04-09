import { AcelerateState } from "./AcelerateState";
import { BreakState } from "./BreakState";
import { CarState } from "./CarState";
import { StartEngineState } from "./StartEngineState";
import { State } from "./State";

export class TurnOffEngineState extends State {
  constructor(public carState: CarState) {
    super(carState);
  }
  startEngine(): string {
    this.carState.changeState(new StartEngineState(this.carState));

    return "can do this";
  }
  turnOffEngine(): string {
    this.carState.changeState(new TurnOffEngineState(this.carState));

    return "turn of the car";
  }
  acelerate(): string {
    this.carState.changeState(new AcelerateState(this.carState));

    return "can do this";
  }
  break(): string {
    this.carState.changeState(new BreakState(this.carState));
    return "can do this";
  }
}
