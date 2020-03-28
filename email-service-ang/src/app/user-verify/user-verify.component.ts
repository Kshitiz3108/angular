import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Component({
  selector: 'app-user-verify',
  templateUrl: './user-verify.component.html',
  styleUrls: ['./user-verify.component.css']
})
export class UserVerifyComponent implements OnInit {

  Users:Observable<User>

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.loadData();
  }
  loadData(){
    this.Users=this.userService.listUser();
  }

  verifyUser(id:number){
    this.userService.verifyUser(id).subscribe(
      data=>{
        this.loadData();
      },
      error=>console.log(error)
      
    );
  }
}
