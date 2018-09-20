import { Component, OnInit } from '@angular/core';

import { UserService } from './services/user.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string = "Greg Doud";
  job: string = "Boot Camp Instructor";
  email: string = "gdoud@MAXtrain.com";

  constructor(private UserSvc: UserService) {}

  logToConsole() {
    this.UserSvc.List()
      .subscribe(users => {
        console.log(users);
      });    
  }

  ngOnInit() {
    let user: User 
      = new User(1, 'MAX','MAX','MAX','MAX','MAX','MAX',true,true,true);
    this.UserSvc.Change(user)
      .subscribe(resp => {
        console.log("Change response", resp);
        this.logToConsole();
      })

    // this.UserSvc.Get("1")
    //   .subscribe(user => {
    //     console.log(user);
    //   });
  }
}
