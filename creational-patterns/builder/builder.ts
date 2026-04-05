type ProgrammingLanguage = "JAVA" | "Python" | "JS";

export class Person {
  public constructor(
    public readonly name: string,
    public readonly age: number,
    public readonly programmingLanguage: ProgrammingLanguage,
  ) {}

  static builder() {
    return new PersonBuilder();
  }
}

class PersonBuilder {
  private _name!: string;
  private _age!: number;
  private _programmingLanguage!: ProgrammingLanguage;

  name(name: string) {
    this._name = name;
    return this;
  }

  age(age: number) {
    this._age = age;
    return this;
  }

  programmingLanguage(programmingLanguage: ProgrammingLanguage) {
    this._programmingLanguage = programmingLanguage;
    return this;
  }

  build() {
    return new Person(this._name, this._age, this._programmingLanguage);
  }
}

