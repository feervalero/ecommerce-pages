import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie";
import { AppComponent } from "../app.component";
@Component({
    selector: 'app-register',
    templateUrl: './register.html',
    styleUrls: ['./register.css']
})
export class RegisterComponent implements OnInit {

    new_user: any;
    login: any = {
        status: false,
        email: '',
        password: ''
    }

    constructor(private cookieService:CookieService,private appComponent:AppComponent) { }

    ngOnInit() {
        if (this.cookieService.getObject("user")) {
            this.login.status = true;
        } else {
            this.new_user = {
                first_name: '',
                middle_name: '',
                last_name: '',
                country: '',
                state: '',
                city: '',
                neigh: '',
                postal_code: '',
                street_number: '',
                email: '',
                phone: '',
                age: '',
                genre: ''
            }
        }
    }
    registerToggle(){
        this.appComponent.registerToggle();
    }

}
