import { GetDataFromDolarApi } from "./GetDataFromDolarApi";
import { ShippingSystem } from "./ShippingSystem";

export class FacadeSystem {
  constructor(
    public getDataFromApiDolarApi: GetDataFromDolarApi,
    public shippingSystem: ShippingSystem,
  ) {}

  async operation(): Promise<void> {
    console.log("Executing getDataFromApiDolarApi");
    let apiResponse = await this.getDataFromApiDolarApi.getData();

    console.log("Executing shippingSystem");
    this.shippingSystem.ship(apiResponse);
  }
}
