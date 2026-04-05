import { Developer } from "./Developer";

export abstract class DeveloperFactory {
  abstract createDeveloper(): Developer;
}
