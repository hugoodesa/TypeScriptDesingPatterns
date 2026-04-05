import { Person } from "./builder";

const person = Person.builder()
  .name("Hugo")
  .age(29)
  .programmingLanguage("JAVA")
  .build();
