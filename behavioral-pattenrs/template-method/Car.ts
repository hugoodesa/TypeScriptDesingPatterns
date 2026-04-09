import { Drive } from "./Drive";

export class Car extends Drive {
  constructor() {
    super({ type: "car" });
  }

  security(): string {
    return "Use sitbelt";
  }

  passangerCapacity(): number {
    return 5;
  }
}
