import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  static removeToken() {
    throw new Error('Method not implemented.');
  }

  private token!: string;

  constructor(private http: HttpClient, private router: Router) { }

  removeToken()
  {
    localStorage.removeItem('token')
  }

  getToken() {
    return localStorage.getItem('token');//this.token;
  }

  setToken(token: string)
  {
    localStorage.setItem('token', token)
  }

  removeStoredUsername()
  {
    localStorage.removeItem('username')
  }

  getStoredUsername() {
    return localStorage.getItem('username');
  }

  setStoredUsername(username: string)
  {
    localStorage.setItem('username', username)
  }

  logout()
{
  this.removeToken()
  this.removeStoredUsername()
  this.router.navigate(['/'])
  alert("Logged Out")
}
  
  login(pusername: string, ppassword: string)
  {
    this.http.post<{token: string}>('https://localhost:3000/api/auth',{username: pusername, password: ppassword})
    .subscribe(response =>{
      const token = response.token;
 
      this.setToken(token)
      this.setStoredUsername(pusername)
      alert("Signed In")
      this.router.navigate(['/posts'])

    })
  }

  signup(pusername: string, ppassword: string, pfirstname: string, plastname: string)
  {
    this.http.post('https://localhost:3000/api/users/',{username: pusername, password: ppassword, firstName: pfirstname, lastName: plastname})
    .subscribe(response =>{
      alert("Account Created")
    })
  }
}
