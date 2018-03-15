"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Frame = /** @class */ (function () {
    function Frame(frame) {
        this.frame = frame;
        this.score = Math.floor(Math.random() * 11);
    }
    return Frame;
}());
exports.Frame = Frame;
