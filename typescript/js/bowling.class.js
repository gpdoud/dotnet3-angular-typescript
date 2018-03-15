"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_class_1 = require("./frame.class");
var Bowling = /** @class */ (function () {
    function Bowling() {
        this.frames = [];
        for (var idx = 0; idx < 10; idx++) {
            this.frames.push(new frame_class_1.Frame(idx));
        }
    }
    Bowling.prototype.print = function () {
        var total = 0;
        var msg = "";
        for (var _i = 0, _a = this.frames; _i < _a.length; _i++) {
            var frame = _a[_i];
            total += frame.score;
            msg += frame.score + ", ";
        }
        msg += "score " + total;
        console.log(msg);
    };
    return Bowling;
}());
var bowling = new Bowling();
bowling.print();
