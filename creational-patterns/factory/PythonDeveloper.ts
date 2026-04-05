import { Developer } from "./Developer";

export class PythonDeveloper implements Developer {
  code(): string {
    console.log("Conding is python");
    return "PYTHON";
  }
}
