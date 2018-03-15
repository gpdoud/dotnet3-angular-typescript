"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var savings_class_1 = require("./savings.class");
var Banking = /** @class */ (function () {
    function Banking() {
    }
    Banking.prototype.main = function () {
        var savings = new savings_class_1.Savings();
        var balance = savings.deposit(100);
        balance = savings.calculateSavings(1);
        if (balance != 101) {
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
    };
    return Banking;
}());
exports.Banking = Banking;
var banking = new Banking();
banking.main();
