import { UserService } from "./user.service"; 
//import $ from 'jquery';

//$().ready(function() {

  console.log("Ready.");
  let UserSvc: UserService = new UserService();

  UserSvc.list()
    .then(users => {
      console.log(users);
    });

//});