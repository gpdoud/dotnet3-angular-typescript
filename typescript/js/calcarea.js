"use strict";
var pi = 3.1415;
var radius = 3;
function radiusOfCircle(radius) {
    return pi * radius * radius;
}
var answer = radiusOfCircle(radius);
function perimeterOfCircle(radius) {
    return 2 * pi * radius;
}
var answer2 = perimeterOfCircle(radius);
console.log("The area is " + answer + ", perimeter is " + answer2);
