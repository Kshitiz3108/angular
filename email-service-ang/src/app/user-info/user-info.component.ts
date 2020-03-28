import { Component, OnInit } from '@angular/core';
import { Student } from '../classes/student';
import { StudentService } from '../student.service';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { LoginDetailsService } from '../login-details.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {


  constructor(private userService:UserService,private router:Router,private loginService:LoginDetailsService) {
   }

   user:User =new User;
   submitted=false;
 
   ngOnInit() {
     this.submitted=false;
     this.user=this.loginService.user;
   }
 
   onSubmit(){
     this.submitted=true;
     this.save();
   }
 
 
   save() {
    this.userService.editUser(this.user)
    .subscribe(
      data=>console.log(data),
      error=>console.log(error));
      this.loginService.login(this.user);
     this.user = new User();
   }
   
   list(){
     this.router.navigate(['../home/view-student']);
   }
}
