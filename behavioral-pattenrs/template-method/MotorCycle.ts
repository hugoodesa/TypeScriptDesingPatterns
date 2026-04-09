import { Drive } from "./Drive";

export class Motorcycle extends Drive {
  constructor() {
    super({ type: "motorcycle" });
  }

  security(): string {
    return "Use helmet";
  }

  passangerCapacity(): number {
    return 2;
  }
}
