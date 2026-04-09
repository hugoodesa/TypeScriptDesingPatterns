import { ApiDataDecorator } from "./ApiDataDecorator";
import { ApiDataTransform } from "./ApiDataTransform";
import { Person } from "./Person";

export class ApiDataDecoratorAddCity extends ApiDataDecorator {
  constructor(public apiData: ApiDataTransform) {
    super(apiData);
  }

  transform(person: Person): string {
    return this.addCity(super.transform(person));
  }

  private addCity(obj: string): string {
    const json = JSON.parse(obj);
    json.city = "Tubarao";
    return JSON.stringify(json);
  }
}
