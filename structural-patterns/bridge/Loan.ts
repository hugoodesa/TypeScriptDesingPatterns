export interface Loan {
  lendMoney(value: number): void;
  getTax(): number;
}
