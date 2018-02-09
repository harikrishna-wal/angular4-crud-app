import { Component,OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular 4';
  landingPage = true;

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCGjvfkdvssC-pwAeAg80GYI5tkU5hX3QA",
      authDomain: "my-first-app-cae81.firebaseapp.com",
      databaseURL: "https://my-first-app-cae81.firebaseio.com",
      projectId: "my-first-app-cae81",
      storageBucket: "my-first-app-cae81.appspot.com",
      messagingSenderId: "588987616184"
    });
  }
}
