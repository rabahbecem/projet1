import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private loginUrl : string;
  private userUrl : string;
  constructor(private http:HttpClient,private router:Router) {
    this.loginUrl = 'http://localhost:4000/login';
    this.userUrl = 'http://localhost:4000/user';
   }

   public connect(login: Login){
     return this.http.post<Login>(this.loginUrl,login);
   }
   public findAll():Observable<any>{
    return this.http.get(this.userUrl);
  }
 
}
