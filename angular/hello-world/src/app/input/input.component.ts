import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  message: string = "Hello, world!";
  redOrBlue: string = "red";

  toggle(): void {
    this.redOrBlue = (this.redOrBlue == "red") ? "blue" : "red";
  }

  log(): void {
    console.log(this.message);
  }

  constructor() { }

  ngOnInit() {
  }

}
