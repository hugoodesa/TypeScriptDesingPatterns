import { Developer } from "./Developer";
import { DeveloperFactory } from "./DeveloperFactory";
import { PythonDeveloper } from "./PythonDeveloper";

export class PythonDeveloperFactory extends DeveloperFactory {
  createDeveloper(): Developer {
    return new PythonDeveloper();
  }
}
