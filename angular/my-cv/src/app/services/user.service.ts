import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';

const url = "http://localhost:58248/Users/";

@Injectable()
export class UserService {

  List(): Observable<User[]> {
    return this.http.get(url+"List") as Observable<User[]>;
  }

  constructor(private http: HttpClient) { 
  }

}
