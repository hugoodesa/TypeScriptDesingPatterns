/* import { ClientBank } from "./models/ClientBank";
import { ClientRestaurant } from "./models/ClientRestaurant";

export class ClientBankAdapter extends ClientRestaurant {
  constructor(private clientBank: ClientBank) {
    super();
  }

  public adapt() :ClientBank {
    return new ClientBank(this.)
  }

}
 */

import { ClientBank } from "./models/ClientBank";
import { ClientRestaurant } from "./models/ClientRestaurant";

export class ClientBankAdapter {
  constructor(private clientBank: ClientBank) {}

  adapt(): ClientRestaurant {
    return new ClientRestaurant(this.clientBank.name, this.clientBank.document);
  }
}
