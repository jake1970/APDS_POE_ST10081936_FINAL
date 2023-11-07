import { Component } from '@angular/core';
import { AuthServiceService } from './auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Government Board';
  
constructor(public auth: AuthServiceService, private router: Router){}




}
