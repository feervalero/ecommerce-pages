import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
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
  constructor() { }

  ngOnInit() {

  }

}
