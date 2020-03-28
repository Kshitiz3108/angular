import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDetailsService } from './login-details.service';
import { Response } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl="https//student-service-270711.appspot.com/user/";
 
  constructor(private http:HttpClient,private login:LoginDetailsService) { }

  createUser(User:Object): Observable<Object>{
    
      return this.http.post(`${this.baseUrl}`+'register-user',User,{responseType:'text'});
    
    ;
  }
  loginUser(User:Object): Observable<any>{
   return this.http.post(`${this.baseUrl}`+'login-user',User);
  }

  editUser(User:Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`+'edit-user',User);
  }

  changePassword(User:Object):Observable<any>{
    return this.http.post(`${this.baseUrl}`+'change-password',User);
  }
  
  listUser(): Observable<any>{
    return this.http.get(`${this.baseUrl}`+'user-list');
  }

  verifyUser(id:number):Observable<any>{
    return this.http.post(`${this.baseUrl}`+'verify-user/'+`${id}`,{responseType:'text'});
  }

}