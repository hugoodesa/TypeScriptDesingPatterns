import { ApiDataTransform } from "./ApiDataTransform";
import { Person } from "./Person";

export class ApiData implements ApiDataTransform {
  constructor(public person: Person) {}

  transform(): string {
    return JSON.stringify(this.person);
  }
}
