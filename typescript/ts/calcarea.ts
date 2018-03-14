
let pi: number = 3.1415;

let radius: number = 3;

function radiusOfCircle(radius: number): number {
  return pi * radius * radius;
}

let answer: number = radiusOfCircle(radius);

function perimeterOfCircle(radius: number): number {
  return 2 * pi * radius;
}

let answer2: number = perimeterOfCircle(radius);

console.log(`The area is ${answer}, perimeter is ${answer2}`);