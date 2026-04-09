import { BankAccount } from "./BankAccount";
import { LoanPersonAccount } from "./LoanPersonAccount";

const account = new BankAccount("Hugo", 565, 2000, 500);
const loanBridge = new LoanPersonAccount(account);

loanBridge.lendMoney(200);
console.log(account);
