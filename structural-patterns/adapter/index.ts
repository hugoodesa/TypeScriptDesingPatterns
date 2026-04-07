import { ClientBankAdapter } from "./ClientBankAdapter";
import { ClientBank } from "./models/ClientBank";

const bankClient = new ClientBank("Hugo", "123456789", 5000, "Brazil");

const adapter = new ClientBankAdapter(bankClient);

const restaurantClient = adapter.adapt();

console.log(restaurantClient);
