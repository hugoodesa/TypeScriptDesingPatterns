import { StartEngineState } from "./StartEngineState";
import { State } from "./State";

export class CarState {
  public state: State;
  constructor() {
    this.state = new StartEngineState(this);
  }

  getState(): State {
    return this.state;
  }

  public changeState(state: State): void {
    this.state = state;
  }
}
