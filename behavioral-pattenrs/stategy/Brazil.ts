import { Travel } from "./Travel";

export class Brazil extends Travel {
  whereVisit(): string[] {
    return ["carnavel", "rio de janeiro", "praia do rosa", "cristo redentor"];
  }
}
