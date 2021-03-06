import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenusService{
  response:any;
  constructor(private http:Http) { }

  getMenuAll():Promise<any>{
    return this.http.get("http://localhost:3000/api/menus")
                    .toPromise()
                    .then(r=>JSON.parse(r["_body"])[0])
                    .catch(this.ErrorHandler);
  }

  getMenus(): Promise<any>{
    return this.http.request("assets/CATALOGXML.xml").toPromise().then(r=>r["_body"]);
  }

  

  ErrorHandler(error: any):Promise<any>{
    console.log("Error has occurred",error);
    return Promise.reject(error.message);
  }
  
}
