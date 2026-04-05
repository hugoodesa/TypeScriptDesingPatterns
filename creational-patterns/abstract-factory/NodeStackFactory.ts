import { DeveloperFactory } from "./DeveloperFactory";
import { IBackendDeveloper } from "./IBackendDeveloper";
import { IFrontEndDeveloper } from "./IFrontEndDeveloper";
import { NodeDeveloper } from "./NodeDev";
import { ReactDeveloper } from "./ReactDev";

export class NodeStackFactory implements DeveloperFactory {
  createBackendDeveloper(): IBackendDeveloper {
    return new NodeDeveloper();
  }

  createFrontendDeveloper(): IFrontEndDeveloper {
    return new ReactDeveloper();
  }
}
