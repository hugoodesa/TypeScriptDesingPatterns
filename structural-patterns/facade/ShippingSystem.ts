import { Currency } from "./model/Currency";
import { Product } from "./model/Product";

export class ShippingSystem {
  constructor(public product: Product) {}

  ship(apiResponse: Currency): void {
    console.log(`some logic from `);
    console.log(apiResponse);
    console.log(`shipping product ${JSON.stringify(this.product)}`);
  }
}
