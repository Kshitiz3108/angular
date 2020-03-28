import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './classes/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL="http://sfda-env.eba-g36pmh3q.us-east-1.elasticbeanstalk.com/students/";

  constructor(private http:HttpClient) { }

  getStudentList(): Observable<any>{
    return this.http.get(`${this.baseURL}`+'student-list');
  }
  createStudent(Student:Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`+'save-student',Student);
  }
  deleteStudent(id:number): Observable<any>{
    return this.http.delete(`${this.baseURL}/delete-student/${id}`,{responseType:'text'});
  }
  updateStudent(id:number,value:any):Observable<Object>{
    return this.http.post(`${this.baseURL}/update-student/${id}`,value);
  }
  getStudentbyId(id:number): Observable<any>{
    return this.http.get(`${this.baseURL}`+'/student-search/'+`${id}`);
  }
  
}
