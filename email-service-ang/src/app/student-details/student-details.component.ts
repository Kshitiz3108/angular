import { Component, OnInit } from '@angular/core';
import { Student } from '../classes/student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { LoginComponent } from '../login/login.component';
import { StudentlistComponent } from '../studentlist/studentlist.component';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  id:number;
  student:Student;
  constructor(private route:ActivatedRoute,private router:Router,private studentService:StudentService) { }

  ngOnInit() {
    this.student=new Student();
    this.id=this.route.snapshot.params['id'];
    this.studentService.getStudentbyId(this.id).subscribe(
      data => {
        console.log(data)
        this.student=data;
      },error =>console.log(error)
    )
  }
  list(){
    this.router.navigate(['students']);
  }

}
