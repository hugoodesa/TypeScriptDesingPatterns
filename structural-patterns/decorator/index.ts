import { ApiData } from "./ApiData";
import { ApiDataDecoratorAddCity } from "./ApiDataDecoratorAddCity";
import { ApiDataDecoratorUpperCase } from "./ApiDataDecoratorUpperCase";
import { Person } from "./Person";

const person = new Person("hugo", 29);

const decorator = new ApiDataDecoratorUpperCase(
  new ApiDataDecoratorAddCity(new ApiData(person)),
);
const tranformedValue = decorator.transform(person);

console.log(tranformedValue);
