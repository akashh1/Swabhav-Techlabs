import { UUID } from 'angular2-uuid';
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Route, Router } from '@angular/router';



@Injectable()
export class UserService {
    USER_URL = "http://localhost:49299/api/v1/ShoppingCart/User";

    constructor(private http: Http, private router: Router,) { }

    GetData() {
        return this.http.get(this.USER_URL + "/GetAllUsers").toPromise()
            .then(r => {
                return r.json();
            });
    }

    RegisterAdmin(adminUser) {
        return this.http.post(this.USER_URL + "/AddUser", adminUser).toPromise();
    }

    GetDataById(id) {
        return this.http.get(this.USER_URL + "/GetUser/" + id).toPromise()
            .then(r => { return r.json(); });
    }

    AuthniticateUser(userName, password, role) {
        console.log("Inside Authniticatate");
        let loginCriteria = {
            UserName : userName,
            Password : password,
            Role : role
        }
        return this.http.post(this.USER_URL + "/Login",loginCriteria).toPromise();   
    }

    UpdateAdmin()
    {
        
    }

    Logout() {
        localStorage.removeItem('user');
    }
}