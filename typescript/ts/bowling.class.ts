import { Game } from "./game.class";

class Bowling {
  games: Game[] = [];

  constructor() {
    for(let idx = 0; idx < 3; idx++) {
      this.games.push(new Game(idx+1));
    }
  }

  print(): void {
    let total = 0;
    let msg = "";
    for(let game of this.games) {
      total +=  game.total;
      msg += `${game.total}, `;
    }
    msg += `score ${total}`;
    console.log(msg);
  }
}

let bowling: Bowling = new Bowling();
bowling.print();