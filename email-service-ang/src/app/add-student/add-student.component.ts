import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Student } from '../classes/student';
import { StudentlistComponent } from '../studentlist/studentlist.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentService:StudentService,private router:Router) { }

  student:Student =new Student;
  submitted=false;

  ngOnInit() {
    this.submitted=false;
  }

  onSubmit(){
    this.submitted=true;
    this.save();
  }


  save() {
    this.studentService.createStudent(this.student)
      .subscribe(data => console.log(data), error => console.log(error));
    this.student = new Student();
  }
  
  list(){
    this.router.navigate(['../home/view-student']);
  }


}
