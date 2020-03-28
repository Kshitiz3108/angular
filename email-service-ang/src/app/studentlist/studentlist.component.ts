import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../classes/student';
import { StudentService } from '../student.service';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { User } from '../classes/user';
import { LoginDetailsService } from '../login-details.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  Students:Observable<Student>;
  usert:User=new User();
  constructor(private studentService:StudentService,private router:Router,private login:LoginDetailsService) { }

  ngOnInit() {
    this.usert=this.login.user;
    this.loadData();
  }

  loadData(){
    this.Students=this.studentService.getStudentList();
  }

  deleteStudent(id:number){
    this.studentService.deleteStudent(id).subscribe(
      data =>{
        console.log(data);
        this.loadData();
      },
      error => console.log(error)
    );    
  }

  studentDetails(id: number){
    this.router.navigate(['../home/student',id]);
  }

  studentUpdate(id: number){
    this.router.navigate(['../home/updateStudent',id]);
  }
}
