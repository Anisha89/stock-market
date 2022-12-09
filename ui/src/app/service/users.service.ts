import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseURL="http://localhost:8080/api/users";
  constructor(private http:HttpClient) { }

  //get all users
  getAll(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseURL}`);
  }
  //getbyuserid
  getbyId(id:number):Observable <any>
  {
    return this.http.get <any> (`${this.baseURL}/${id}`);
  }
  //update users
  update(user:User): Observable<Object>{
    return this.http.put(`${this.baseURL}`,user );
  }
 //delete users
  delete(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}` );
  }
  changepassword(user:User):Observable<Object>{
    return this.http.post(`${this.baseURL}`,user );
  }

}
