import { Component, OnInit } from '@angular/core';

import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string = "Greg Doud";
  job: string = "Boot Camp Instructor";
  email: string = "gdoud@maxtrain.com";

  constructor(private UserSvc: UserService) {}

  ngOnInit() {
    this.UserSvc.List()
      .subscribe(users => {
        console.log(users);
      });
  }
}
