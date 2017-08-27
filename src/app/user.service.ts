import { Injectable } from '@angular/core';
import { UserClass } from "./user-class/user-class.component";
import { USERS } from "./USERS/users";
import { Headers,Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json','Access-Control-Origin':'http://localhost:4200/'});
  constructor(private http:Http){}

  getUsers(): Promise<UserClass[]>{
    return Promise.resolve(USERS)
   }
  getOrdersByProfile(id: string): Promise<any>{
    return this.http.get("http://localhost:3000/api/orders/"+id)
                  .toPromise()
                  .then(result=>JSON.parse(result["_body"]))
                  .catch(this.ErrorHandler);
    }

  getFavoritesByProfile(id:string): Promise<any>{
    return this.http.get("http://localhost:3000/api/favorites/"+id)
                  .toPromise()
                  .then(result=>JSON.parse(result["_body"]))
                  .catch(this.ErrorHandler);
    }

  getUsersAPI(): Promise<UserClass[]>{
    return this.http.get("http://localhost:3000/api/contacts")
               .toPromise()
               .then(response=>JSON.parse(response["_body"]) as UserClass)
               .catch(this.ErrorHandler);
    }
  getPaymentsById(id:string): Promise<any>{
    return this.http.get("http://localhost:3000/api/payments/"+id)
                .toPromise()
                .then(r=>JSON.parse(r["_body"]))
                .catch(this.ErrorHandler);
    }
  getAddressesById(id:string): Promise<any>{
    return this.http.get("http://localhost:3000/api/addresses/"+id)
                .toPromise()
                .then(r=>JSON.parse(r["_body"]))
                .catch(this.ErrorHandler);
    }
  ErrorHandler(error: any): Promise<any> {
    console.log("Error has ocurred", error);
    return Promise.reject(error.message);
   }
}
