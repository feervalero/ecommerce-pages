import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Item } from "./item";
import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { HttpParams } from "@angular/common/http";
@Injectable()
export class OrderService {
  user: any;
  private localOrder:any = [];
  constructor(private cs:CookieService,private http:Http) { }

  addOneToCart(item: Item): number{
    item.Quantity = 1;
    var nv = 1;
    console.log("this will be inserted",item);
    if(this.cs.getObject("order") == undefined)
    {
      this.localOrder.push(item);
      this.cs.putObject("order",this.localOrder);

    }else{
      var encontrado = false;
      this.localOrder =this.cs.getObject("order");
      console.log(this.localOrder);
      for(let val of this.localOrder){
        if(val.Sku == item.Sku){
          encontrado = true;
          //cambia valor de val.Quantity +1
          val.Quantity = val.Quantity+1;
          nv = val.Quantity;
        }
      }
      if(encontrado == false){
        this.localOrder.push(item);
      }
      this.cs.remove("order");
      this.cs.putObject("order",this.localOrder);
    }
    console.log(item)
    return nv;
  }
  removeOneToCart(item: Item): number{
    var mg = 0;
    console.log("this will be inserted",item);
    if(this.cs.getObject("order") == undefined)
    {
      this.localOrder.push(item);
      this.cs.putObject("order",this.localOrder);

    }else{
      var encontrado = false;
      this.localOrder =this.cs.getObject("order");
      for(let val of this.localOrder){
        if(val.Sku == item.Sku){
          encontrado = true;
          //cambia valor de val.Quantity +1
          if(val.Quantity>0){
            val.Quantity = val.Quantity-1;
            mg = val.Quantity;
          }
        }
      }
      this.cs.remove("order");
      this.cs.putObject("order",this.localOrder);
    }
    return mg;
  }
  getOrderFromCookie():any{
    
    return this.cs.getObject("order");
  }
  getUserIDFromCookie():any{
    
    if(this.cs.getObject("user")){
      this.user = this.cs.getObject("user");
      return this.user["_id"];
    }else{
      return null;
    }
  }
  
  getOrderFromStage(userid: any,stage: any){
    return this.http.get("http://localhost:3000/api/orders/"+userid+"/"+stage)
    .toPromise()
    .then(r=>JSON.parse(r["_body"])[0])
    .catch(this.ErrorHandler);
    
  }
  deleteOrder(userid: any,stage: any){
    return this.http.delete("http://localhost:3000/api/orders/"+userid+"/"+stage)
    .toPromise()
    .then(r=>JSON.parse(r["_body"])[0])
    .catch(this.ErrorHandler);
  }
  saveOrderFromCookieToStage(cookieOrder: any){
    return this.http.post("http://localhost:3000/api/orders/",cookieOrder,{
      params: new HttpParams().set("Content-Type","application/x-www-form-urlencoded")
    })
    .toPromise()
    .then(r=>JSON.parse(r["_body"]))
    .catch(this.ErrorHandler);
  }
  ErrorHandler(error: any):Promise<any>{
    console.log("Error has occurred",error);
    return Promise.reject(error.message);
  }
}
