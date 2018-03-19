export class Frame {
  frame: number;
  pins: number[] = []; // pins knocked down with each ball
  score: number = 0;

  constructor(frame: number) { 
    this.frame = frame; 
  }

  roll(max: number = 10): number {
    return Math.floor(Math.random() * (max + 1));
  }

  bowl10th(): void {
    // first ball
    let totalPins = 0;
    let b1 = this.roll();
    totalPins += b1;
    this.pins.push(b1);
    if(b1 == 10) {
      totalPins = 0;
    }
    let b2 = this.roll(10 - totalPins);
    totalPins += b2;
    this.pins.push(b2);
    if(totalPins < 10) {
      return;
    }
  }

  bowl(): void {
    // first ball
    let totalPins = 0;
    let b1 = this.roll();
    totalPins += b1;
    this.pins.push(b1);
    // second ball?
    if(totalPins == 10) {
      return;
    }
    let b2 = this.roll(10 - totalPins);
    totalPins += b2;
    this.pins.push(b2);
  }
}