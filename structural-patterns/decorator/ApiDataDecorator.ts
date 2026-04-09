import { ApiDataTransform } from "./ApiDataTransform";
import { Person } from "./Person";

export abstract class ApiDataDecorator implements ApiDataTransform {
  constructor(public apiData: ApiDataTransform) {}

  transform(person: Person): string {
    return this.apiData.transform(person);
  }
}
