"use strict";
var FooBar = /** @class */ (function () {
    function FooBar() {
    }
    FooBar.prototype.run = function () {
        var msg = "";
        for (var idx = 1; idx <= 100; idx++) {
            var strNbr = "";
            if (idx % 3 == 0) {
                strNbr += "Foo";
            }
            if (idx % 5 == 0) {
                strNbr += "Bar";
            }
            if (strNbr == "") {
                strNbr += "" + idx;
            }
            msg += strNbr + " ";
        }
        console.log(msg);
    };
    return FooBar;
}());
var fb = new FooBar();
fb.run();
