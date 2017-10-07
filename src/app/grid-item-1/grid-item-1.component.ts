import { Component, OnInit,Input } from '@angular/core';
import { OrderService } from "../order.service";
import { Item } from "../item";
@Component({
  selector: 'grid-item-1',
  templateUrl: './grid-item-1.component.html',
  styleUrls: ['./grid-item-1.component.css'],
  providers:[OrderService]
})
export class GridItem1Component implements OnInit {
  
  @Input() new: any;
  @Input() sku: any;
  @Input() displayname: string;
  @Input() price: any;
  @Input() quantity: any;
  yh: any;
  constructor(private os:OrderService) { }

  ngOnInit() {
  }

  addCartOne(sku: any){
    this.yh = {
    Price:this.price,
    Sku:sku,
    Quantity:this.quantity,
    ItemDesc:this.displayname
  };
  this.quantity = this.os.addOneToCart(this.yh);
  }
  removeCartOne(sku: any){
    this.yh = {
    Price:this.price,
    Sku:sku,
    Quantity:this.quantity,
    ItemDesc:this.displayname
  };
  this.quantity = this.os.removeOneToCart(this.yh);
  }


}
