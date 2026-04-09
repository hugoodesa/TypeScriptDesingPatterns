import { Person } from "./Person";

export interface ApiDataTransform {
  transform(person: Person): string;
}
