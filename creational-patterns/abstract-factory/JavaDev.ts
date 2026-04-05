import { IBackendDeveloper } from "./IDeveloper";

export class JavaDeveloper implements IBackendDeveloper {
  developAPI(): string {
    return "API using Spring Boot";
  }
}
