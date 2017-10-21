import { Component, OnInit } from '@angular/core';
import { OrderService } from "../../order.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers:[OrderService]
  
})
export class CartComponent implements OnInit {
  order: any = {
    contact:"01010101",
    created_date:"2017-07-02 15:22:33.000",
    stage:"90",
    status:"1",
    image:"1",
    products:[{
      sku:"10011002",
      image:"1",
      quantity:"2",
      name:"Corrector Facial Precio Especial",
      price:"1050.50",
      price_discount:"700"
    },{
      sku:"10011003",
      image:"1",
      quantity:"3",
      name:"Corrector Facial Precio Especial New",
      price:"105.50",
      price_discount:"70"
    }],
    shipping_address:{
      Country:"MX",
      State:"Nuevo Leon",
      City:"Monterrey",
      Neighbourhood:"Centro",
      street_number:"calle 1234"
  
    },
    total:"700",
    total_extra:{
      taxes:"112",
      freight:"97.44"
    },
    payments:{
      payment_type:"1",
      credit_card:"99795729",
      amount:"909.44",
      status:"1"
    }
  
  };
  userid: any;
  currentOrder: any;
  constructor(private os:OrderService) { }

  ngOnInit() {
    this.fromCookieToDB();
  }

  fromCookieToDB(){
    //revisa cookie
      //si hay
        //borra cookie en db si hay
        //insert cookie en db
        //muestra en UI
      //si no hay
        // do nothing

    if(this.os.getOrderFromCookie()){
      this.currentOrder = this.os.getOrderFromCookie();
      this.userid = this.os.getUserIDFromCookie();
      console.log(this.userid);
      if(this.currentOrder && this.userid){
        console.log(this.currentOrder);
        this.os.deleteOrder(this.userid,"10");
        var stageOrder = {
          contactid:this.userid,
          items:this.currentOrder,
          stage:"10"
        };
        this.os.saveOrderFromCookieToStage(stageOrder).then(x=>{
          
        });

      }
      
    }
  }
  
}
