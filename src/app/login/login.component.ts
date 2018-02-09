import { Component, OnInit } from '@angular/core';


import * as firebase from 'firebase';


import { log } from 'util';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';




@Component({
  selector: '[login]',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private authservice: AuthService, private router : Router) {}
  
  title:string = 'Login';
  emailText:string = 'Email';
  passwordText:string = 'Password';


  isError:boolean = false;
  errorText:string = '';

  showError(error) {
    this.isError = true;
    this.errorText = error;
  }

 email = '';
 password = '';
  

  redirectToInnerPage() {
    localStorage.setItem('userEmail',this.email);
    this.authservice.setUserLoggedIn();
    this.router.navigate(['/users']);
  }

  onSubmit(form : NgForm) {
    this.email = form.value.email;
    this.password = form.value.password;
    
    this.authservice.login(this.email, this.password)
        .subscribe(
          success => this.redirectToInnerPage(),
          error => this.showError(error)
        );
  }

  

  ngOnInit() {
    if(this.authservice.getUserLoggedIn()) {
      this.router.navigate(['/users']);
    }
  }
}
