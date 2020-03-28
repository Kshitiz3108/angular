import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { LoginDetailsService } from '../login-details.service';
import { User } from '../classes/user';
import { Pojo } from '../classes/pojo';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private userService:UserService,private router:Router,private loginService:LoginDetailsService) { }
  
  usert:User=new User;
  submitted=false;
  npwd:String;
  rnpwd:String;
  pwd:String;
  p:Pojo;
  message:String;
  isVisible:boolean;
  form:FormGroup;

  ngOnInit() {
    this.submitted=false;
    this.usert=this.loginService.user;
  }

  onSubmit(){
    if(this.npwd===this.rnpwd){
      this.usert.user_password=this.pwd;
      this.usert.user_new_password=this.npwd;
      this.userService.changePassword(this.usert).subscribe(
        data=>{
          this.p=data;
          if(this.p.status==="invalid password"){
            this.message="Old Password is wrong";
            this.isVisible=true;
            this.submitted=false
          }
          else{

            this.message="Password successfully changed. Please login again to see effects";
            this.isVisible=true;
            this.submitted=true;
          }
        },
        error=>error
      )
    }
    else{
      this.message="New password do not match";
      this.isVisible=true;
      this.submitted=false;
    }
  }
  list(){
    this.router.navigate(['../home/view-student']);
  }
}
