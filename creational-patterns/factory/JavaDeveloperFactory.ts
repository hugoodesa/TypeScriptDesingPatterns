import { Developer } from "./Developer";
import { DeveloperFactory } from "./DeveloperFactory";
import { JavaDeveloper } from "./JavaDeveloper";

export class JavaDeveloperFactory extends DeveloperFactory {
  createDeveloper(): Developer {
    return new JavaDeveloper();
  }
}
