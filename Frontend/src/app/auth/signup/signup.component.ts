import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public authService: AuthServiceService, private router: Router) { }
  
  option: string = this.router.url
  

  ngOnInit(): void {
  }

  onsignup(signupform: NgForm)
  {
  
      this.authService.signup(signupform.value.username, signupform.value.password, signupform.value.firstName, signupform.value.lastName);

  }

}
