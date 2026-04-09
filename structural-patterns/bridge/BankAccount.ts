import { Bank } from "./Bank";

export class BankAccount implements Bank {
  constructor(
    public name: string,
    public number: number,
    public balance: number,
    public limit: number,
  ) {}

  withdraw: (value: number) => void = (value: number) => {
    const balancePlusLimit = this.balance + this.limit;
    const isTooBigValue = balancePlusLimit > value;

    if (isTooBigValue) {
      const errorMessage = "not enough limit";
      console.warn(errorMessage);
      throw new Error(errorMessage);
    }

    if (this.balance >= value) {
      console.log("Debit on balance");
      this.balance -= value;
      return;
    }

    console.log("Value to big will be use the limit");
    const valueToDiscountFromLimit = balancePlusLimit - value;
    this.balance = 0;
    this.limit -= valueToDiscountFromLimit;
  };

  deposit: (value: number) => void = (value: number) => {
    value = value < 0 ? value * -1 : value;
    this.balance += value;
  };

  toString(): string {
    return JSON.stringify(this);
  }
}
