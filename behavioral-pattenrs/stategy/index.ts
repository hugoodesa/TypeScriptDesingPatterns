import { Brazil } from "./Brazil";
import { Eua } from "./Eua";
import { Travel } from "./Travel";

const whereToGo = "EUA";
const countries = new Map<string, Travel>();

countries.set("BR", new Brazil());
countries.set("EUA", new Eua());

for (const [country, clazz] of countries) {
  if (country === whereToGo) console.log(clazz.whereVisit());
}
