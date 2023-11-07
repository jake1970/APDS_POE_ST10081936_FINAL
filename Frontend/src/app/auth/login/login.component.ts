import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {


  constructor(public authService: AuthServiceService, private router: Router) { }
  
  option: string = this.router.url
  

  ngOnInit(): void {
  }
  

  
  onlogin(loginform: NgForm)
  {
      this.authService.login(loginform.value.username, loginform.value.password);
  }
  

}
