import { Injectable } from '@angular/core';
import { User } from './classes/user';

@Injectable({
  providedIn: 'root'
})
export class LoginDetailsService {

  constructor() { }

  user:User=new User();
  st:String;

  login(user1:User){
    this.user=user1;
  }
  getuser(){
    return this.user;
  }
}
