import { AngularDeveloper } from "./AngularDev";
import { DeveloperFactory } from "./DeveloperFactory";
import { IBackendDeveloper } from "./IBackendDeveloper";
import { IFrontEndDeveloper } from "./IFrontEndDeveloper";
import { JavaDeveloper } from "./JavaDev";

export class JavaStackFactory implements DeveloperFactory {
  createBackendDeveloper(): IBackendDeveloper {
    return new JavaDeveloper();
  }

  createFrontendDeveloper(): IFrontEndDeveloper {
    return new AngularDeveloper();
  }
}
