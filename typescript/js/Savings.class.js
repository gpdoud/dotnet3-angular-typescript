"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Savings = /** @class */ (function () {
    function Savings() {
        this.balance = 0;
        this.intRate = 0.12;
    }
    Savings.prototype.calculateSavings = function (termInMonths) {
        var interest = this.balance * ((this.intRate / 12) * termInMonths);
        return this.deposit(interest);
    };
    Savings.prototype.deposit = function (amount) {
        if (amount < 0) {
            console.log("Amount cannot be negative.");
            return this.balance;
        }
        this.balance += amount;
        return this.balance;
    };
    return Savings;
}());
exports.Savings = Savings;
