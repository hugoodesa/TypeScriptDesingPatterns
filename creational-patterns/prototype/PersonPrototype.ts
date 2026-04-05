import { IPrototype } from "./Iprototype";

type ProgrammingLanguage = "JAVA" | "Python" | "JS";

export class Person implements IPrototype<Person> {
  public constructor(
    public name: string,
    public age: number,
    public programmingLanguage: ProgrammingLanguage,
  ) {}

  clone(): Person {
    return new Person(this.name, this.age, this.programmingLanguage);
  }
}
