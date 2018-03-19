import $ from 'jquery';

const baseurl = "http://localhost:58248/"; 
const controller = "Users";
const url = baseurl + controller + "/";

export class UserService {

  list() {
    return $.getJSON(url+"List");
  }
}