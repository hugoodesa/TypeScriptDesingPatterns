import { IFrontEndDeveloper } from "./IFrontEndDeveloper";

export class ReactDeveloper implements IFrontEndDeveloper {
  developUI(): string {
    return "DEV React";
  }
}
