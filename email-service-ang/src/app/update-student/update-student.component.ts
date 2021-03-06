import { Component, OnInit } from '@angular/core';
import { Student } from '../classes/student';
import { ActivatedRoute,Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id:number;
  student:Student;
  submitted=false;
  constructor(private route: ActivatedRoute,private router: Router,private studentService:StudentService) { }

  ngOnInit() {
    this.student=new Student();

    this.id=this.route.snapshot.params['id'];
    this.studentService.getStudentbyId(this.id).subscribe(
      data=>{
        console.log(data),
        this.student=new Student();
      },
      error=>console.error(error) 
    )
  }

  updateStudent(){
    this.studentService.updateStudent(this.id,this.student).subscribe(
      data => console.log(data),
      error =>console.log(error)
    )
    this.student=new Student();
    this.gotoList();
  }

  gotoList(){
    this.router.navigate(['/view-student']);
  }
  onSubmit(){
    this.updateStudent();
  }



}
