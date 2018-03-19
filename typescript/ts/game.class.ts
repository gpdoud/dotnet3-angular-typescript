import { Frame } from "./frame.class";

export class Game {

  nbr: number;
  frames: Frame[] = [];
  total: number = 0;

  constructor(nbr: number) {
    this.nbr = nbr;
    for(let idx = 0; idx < 10; idx++) {
      let f: Frame = new Frame(idx);
      this.frames.push(f);
      this.total += f.score;
    }
  }
  
  print(): void {
    let msg = "";
    for(let frame of this.frames) {
      msg += `${frame.score}, `;
    }
    msg += `score ${this.total}`;
    console.log(msg);
  }
}