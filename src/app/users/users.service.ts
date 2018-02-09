
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';



export interface User {
    first_name;
    last_name;
}

@Injectable()
export class UserService {

    constructor(private http: Http) {}

    getUsers() {
        return this.http.get('https://my-first-app-cae81.firebaseio.com/.json')
                    .toPromise()
                    .then(res => {
                        return res.json();
                    });
                    



        //return this.http.get('https://my-first-app-cae81.firebaseio.com/.json');
    }
}

