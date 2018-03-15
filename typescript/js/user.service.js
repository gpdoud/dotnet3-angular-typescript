"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var baseurl = "http://localhost:58248/";
var controller = "Users";
var url = baseurl + controller + "/";
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.list = function () {
        return jquery_1.default.getJSON(url + "List");
    };
    return UserService;
}());
exports.UserService = UserService;
