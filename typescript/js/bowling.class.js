"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_class_1 = require("./game.class");
var Bowling = /** @class */ (function () {
    function Bowling() {
        this.games = [];
        for (var idx = 0; idx < 3; idx++) {
            this.games.push(new game_class_1.Game(idx + 1));
        }
    }
    Bowling.prototype.print = function () {
        var total = 0;
        var msg = "";
        for (var _i = 0, _a = this.games; _i < _a.length; _i++) {
            var game = _a[_i];
            total += game.total;
            msg += game.total + ", ";
        }
        msg += "score " + total;
        console.log(msg);
    };
    return Bowling;
}());
var bowling = new Bowling();
bowling.print();
