import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { TableModule } from 'primeng/table';
import { UserService } from './users.service';
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  private fdb;
  private ref;
  //private usersObservable : Observable<any[]> ; 

  constructor(private authservice: AuthService, private router : Router, private userservice : UserService) {
    // this.fdb = firebase.database();
    // this.ref = this.fdb.ref('users');

    // var data = {
    //           first_name: 'hari',
    //           last_name: 'krishna'
    //           }
    // this.ref.push(data);
   }

  logout() {

    this.authservice.logout();
    setTimeout(() => {
      localStorage.clear();
      this.authservice.setUserLoggedIn();
      
      this.router.navigate(['']);
    },500);
    
    
  }
  private users;

  ngOnInit() {
    this.userservice.getUsers().then(cars => this.users = cars);
  }


}
