import { DeveloperFactory } from "./DeveloperFactory";
import { JavaStackFactory } from "./JavaStackFactory";
import { NodeStackFactory } from "./NodeStackFactory";

function createTeam(factory: DeveloperFactory) {
  const backend = factory.createBackendDeveloper();

  const frontend = factory.createFrontendDeveloper();

  console.log(backend.developAPI());
  console.log(frontend.developUI());
}

createTeam(new JavaStackFactory());
createTeam(new NodeStackFactory());
