import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  postUser(userObj: User) {
    throw new Error('Method not implemented.');
  }

  constructor(private _http:HttpClient) { }


  loginUserRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8085/api/v1/login",user);

  }
  
  registerUserRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8085/api/v1/register",user);
``
  }

}