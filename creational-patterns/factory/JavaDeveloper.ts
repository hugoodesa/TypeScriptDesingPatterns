import { Developer } from "./Developer";

export class JavaDeveloper implements Developer {
  code(): string {
    console.log("Conding is Java");
    return "JAVA";
  }
}
