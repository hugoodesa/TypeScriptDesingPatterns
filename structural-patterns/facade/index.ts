import { FacadeSystem } from "./FacadeSystem";
import { GetDataFromDolarApi } from "./GetDataFromDolarApi";
import { Product } from "./model/Product";
import { ShippingSystem } from "./ShippingSystem";

const productMock: Product = {
  name: "notebook",
  price: 2900,
};
const systemOne = new GetDataFromDolarApi();
const systemTwo = new ShippingSystem(productMock);

const facade = new FacadeSystem(systemOne, systemTwo);
facade.operation();
