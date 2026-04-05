import { IBackendDeveloper } from "./IDeveloper";
import { IFrontEndDeveloper } from "./IFrontEndDeveloper";

export interface DeveloperFactory {
  createBackendDeveloper(): IBackendDeveloper;

  createFrontendDeveloper(): IFrontEndDeveloper;
}
