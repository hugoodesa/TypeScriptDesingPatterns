import { ApiDataDecorator } from "./ApiDataDecorator";
import { ApiDataTransform } from "./ApiDataTransform";
import { Person } from "./Person";

export class ApiDataDecoratorUpperCase extends ApiDataDecorator {
  constructor(public apiData: ApiDataTransform) {
    super(apiData);
  }

  transform(person: Person): string {
    return this.toUpperCase(super.transform(person));
  }

  private toUpperCase(obj: string) {
    const json = JSON.parse(obj);
    console.log(json);

    Object.keys(json).forEach((key) => {
      const value = json[key];
      if (typeof value === "string") {
        json[key] = value.toUpperCase();
      }
    });

    return json;
  }
}
