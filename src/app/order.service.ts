import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Order } from "./order";
import { Item } from "./item";
@Injectable()
export class OrderService {

  private localOrder:any = [];
  constructor(private cs:CookieService) { }

  addOneToCart(item: Item): number{
    var nv = 0;
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
    console.log(this.cs.getObject("order"))
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
}
