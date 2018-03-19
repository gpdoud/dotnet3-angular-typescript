class FooBar {
  
  run(): void {
    let msg = "";
    for(let idx = 1; idx <= 100; idx++) {
      let strNbr = "";
      if(idx % 3 == 0) { strNbr += "Foo"; }
      if(idx % 5 == 0) { strNbr += "Bar"; }
      if(strNbr == "") { strNbr += `${idx}`; }
      msg += strNbr+" ";
    }
    console.log(msg);
  }
}

let fb: FooBar = new FooBar();
fb.run();