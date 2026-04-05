import { IBackendDeveloper } from "./IDeveloper";

export class NodeDeveloper implements IBackendDeveloper {
  developAPI(): string {
    return "API using Express";
  }
}
