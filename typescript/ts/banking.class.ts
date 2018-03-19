import { Account } from "./account.class";
import { Savings } from "./savings.class";

export class Banking {

  constructor() {

  }

  main(): void {

    let savings: Savings = new Savings();
    let balance: number = savings.deposit(100);
    balance = savings.calculateSavings(1);
    if(balance != 101) {
      console.error("Something is wrong!", balance);
      return;
    }

    // let account: Account = new Account();
    // balance = account.deposit(100);
    // if(balance != 100) {
    //   console.log("we have a problem!!!");
    //   return;
    // }
    // balance = account.withdraw(25);
    // if(balance != 75) {
    //   console.log("we have a problem!!!");
    //   return;
    // }
    // // check for negative balance
    // balance = account.withdraw(100);
    // if(balance != 75) {
    //   console.log("we still have a problem!");
    //   return;
    // }
    // // check for negative amount
    // balance = account.withdraw(-100);
    // if(balance != 75) {
    //   console.log("we still have a problem!");
    //   return;
    // }
    // // check for negative amount
    // balance = account.deposit(-100);
    // if(balance != 75) {
    //   console.log("we still have a problem!");
    //   return;
    // }
    // // get balance
    // balance = account.getBalance();
    // if(balance != 75) {
    //   console.log("we still have a problem!");
    //   return;
    // }
    console.log("Everything is aOK!");
  }
}

let banking: Banking = new Banking();
banking.main();