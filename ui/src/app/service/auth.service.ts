import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 constructor(private http: HttpClient) { }
 register(username: string, email: string, password: string,role:string[]): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password,
      role
    }, httpOptions);
  }
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions);
  }
forgot(email:string):Observable<any>{
  return this.http.post<any>(AUTH_API + 'forgotpassword',{
    email
    },httpOptions);
}
reset(reset_token:string,password:string):Observable<any>{
  return this.http.put<any>(AUTH_API + 'resetpassword?token='+ reset_token,{
 password
 },httpOptions);
}
logout()
  {
    localStorage.removeItem('token')
  }
}
