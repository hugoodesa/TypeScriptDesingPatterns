export interface Bank {
  withdraw: (value: number) => void;
  deposit: (value: number) => void;
}
