export class Account {

  balance: number = 0;

  getBalance(): number {
    return this.balance;
  }

  deposit(amount: number): number {
    if(amount < 0) {
      console.error("Amount to deposit cannot be negative.");
      return this.balance;
    }
    this.balance += amount;
    return this.balance;
  }
  withdraw(amount: number): number {
    if(amount < 0) {
      console.error("Amount to withdraw cannot be negative.");
      return this.balance;
    }
    if(amount > this.balance) {
      console.error("Insufficient funds");
      return this.balance;
    }
    this.balance -= amount;
    return this.balance;
  }
}