import { Bank } from "./Bank";
import { Loan } from "./Loan";

export class CompanyAccount implements Loan {
  constructor(public bank: Bank) {}
  getTax(): number {
    return 1.5;
  }

  lendMoney(value: number): void {
    this.bank.deposit(value);

    const totalValue = value * this.getTax();
    console.log("CompanyAccount");
    console.log(`Loan money value to be pay: ${totalValue}`);
  }
}
