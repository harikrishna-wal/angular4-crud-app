import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {
    
    
    
    login(email:string, password:string): Observable<any> {
        return Observable.fromPromise(
            firebase.auth().signInWithEmailAndPassword(email, password)
        );
    }

    setUserLoggedIn() {
        if(firebase.auth().currentUser == null) {
            localStorage.setItem('isLoggedIn','false');
        } else {
            //firebase.auth().currentUser.uid;
            localStorage.setItem('isLoggedIn','true');
        }
    }

    getUserLoggedIn() {
        return JSON.parse(localStorage.getItem('isLoggedIn'));
    }

    logout() {
        firebase.auth().signOut();
    }
}