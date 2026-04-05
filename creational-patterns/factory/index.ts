import { JavaDeveloperFactory } from "./JavaDeveloperFactory";
import { PythonDeveloperFactory } from "./PythonDeveloperFactory";

const javaDev = new JavaDeveloperFactory().createDeveloper();
javaDev.code();

const pythonDev = new PythonDeveloperFactory().createDeveloper();
pythonDev.code();
