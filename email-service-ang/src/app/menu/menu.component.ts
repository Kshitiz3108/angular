import { Component, OnInit } from '@angular/core';
import { LoginDetailsService } from '../login-details.service';
import { User } from '../classes/user';

@Component({
  selector: 'app-menus',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  
})
export class MenuComponent implements OnInit {

  user:User=new User();
  constructor(private login:LoginDetailsService) { 
    this.user=this.login.user;
  }

  ngOnInit() {
    this.user=this.login.user;
  }
  
}