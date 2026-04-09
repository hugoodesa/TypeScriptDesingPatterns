import { Travel } from "./Travel";

export class Eua extends Travel {
  whereVisit(): string[] {
    return ["super bowl", "snow", "baseball game"];
  }
}
