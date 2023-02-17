import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string="https://localhost:44389/api/User/"
  constructor(private http:HttpClient) { }

  signUp(userobj:any){
    return this.http.post<any>(`${this.baseUrl}register`,userobj)

  }
  login(loginobj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginobj)

  }

 
}
