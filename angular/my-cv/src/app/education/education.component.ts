import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {


  schools: string[] = [
    "MA Cert LMP - Athenaeum of Ohio - 2017",
    "BS IPS - University of Cincinnati - 1985",
    "St. Xavier HS"
  ];

  constructor() { }

  ngOnInit() {
  }

}
