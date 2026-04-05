import { IFrontEndDeveloper } from "./IFrontEndDeveloper";

export class AngularDeveloper implements IFrontEndDeveloper {
  developUI(): string {
    return "DEV Angular";
  }
}
