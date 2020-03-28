import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import * as $ from "jquery";
import { UserService } from '../user.service';
import { User } from '../classes/user';
import { error } from 'protractor';
import { IfStmt } from '@angular/compiler';
import { LoginDetailsService } from '../login-details.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Pojo } from '../classes/pojo';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,private userService:UserService,private loginService:LoginDetailsService) { }

  user:User=new User();
  user1:User=new User();
  user2:User=new User();
  submitted=false;
  da:Pojo;
  login_message:String="";
  signup_message:String="";
  s:number=0;
  isVisible:boolean;
  ifVisibility:boolean
  ngOnInit() {

    $(document).ready(function(){
      $('#goRight').on('click', function(){
        $('#slideBox').animate({
          'marginLeft' : '0'
        });
        $('.topLayer').animate({
          'marginLeft' : '100%'
        });
      });
      $('#goLeft').on('click', function(){
        $('#slideBox').animate({
          'marginLeft' : '50%'
        });
        $('.topLayer').animate({
          'marginLeft': '0'
        });
      });
    });
    this.isVisible=false;
    this.submitted=false;
  }

  onsignup(){
    this.submitted=true;
    this.onRegiser()
  }

  onRegiser(){
    this.userService.createUser(this.user).
    subscribe(
      (data) =>
      {console.log(data);
        this.onRight()
    },(error)=>{
      console.log(error);
      this.onWrong()});
  }
  onWrong(){
    this.ifVisibility=true;
    this.signup_message=" Username already registered"
    this.submitted=false;
    
    
  }
  onRight(){
    this.ifVisibility=true;
    this.signup_message=" User needs to be verified"
    this.submitted=false;
  }
  onLogin(){
      this.userService.loginUser(this.user1).
      subscribe(
        (data)=>{data;
        this.da=data;
        console.log(this.da);
        if(this.da.status==="Welcome"){
          this.loginService.login(this.da.user);
          this.route.navigate(['user-info']);
        }

        if(this.da.status==="No User Found"){
          this.isVisible=true;
          this.login_message=" Please Sign Up, No username found";
        }

        if(this.da.status==="Password wrong"){
          this.isVisible=true;
          this.login_message=" Please Enter the correct password";
        }

        if(this.da.status==="admin login"){
          this.route.navigate(['../admin/user-verify'])
        }

        if(this.da.status==="not verified"){
          this.isVisible=true;
          this.login_message=" Please contact admin to verify user"
        }

      });   
    }
  }