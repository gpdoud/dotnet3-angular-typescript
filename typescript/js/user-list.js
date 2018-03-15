"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("./user.service");
//import $ from 'jquery';
//$().ready(function() {
console.log("Ready.");
var UserSvc = new user_service_1.UserService();
UserSvc.list()
    .then(function (users) {
    console.log(users);
});
//});
