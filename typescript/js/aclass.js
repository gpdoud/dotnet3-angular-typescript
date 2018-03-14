"use strict";
var Customer = /** @class */ (function () {
    function Customer(id, name, active, creditLimit) {
        this.id = id;
        this.name = name;
        this.active = active;
        this.creditLimit = creditLimit;
    }
    Customer.prototype.printOut = function () {
        console.log("id=" + this.id + ", name=" + this.name + ",\n       active=" + this.active + ", creditLimit=" + this.creditLimit);
    };
    return Customer;
}());
var custs = [
    new Customer(1, "MAX", true, 10000),
    new Customer(2, "Starbucks", true, 100000),
    new Customer(3, "Jimmy Johns", true, 5000)
];
for (var _i = 0, custs_1 = custs; _i < custs_1.length; _i++) {
    var customer = custs_1[_i];
    customer.printOut();
}
