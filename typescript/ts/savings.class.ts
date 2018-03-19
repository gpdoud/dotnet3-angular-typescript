export class Savings {

  balance: number = 0;
  intRate: number = 0.12;

  calculateSavings(termInMonths:number): number {
    let interest: number  = this.balance * ((this.intRate / 12) * termInMonths);
    return this.deposit(interest);
  }
  deposit(amount: number): number {
    if(amount < 0) {
      console.log("Amount cannot be negative.");
      return this.balance;
    }
    this.balance += amount;
    return this.balance;
  }
}