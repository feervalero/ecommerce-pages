import { Component, OnInit,Input } from '@angular/core';
import { OrderService } from "../order.service";
import { Item } from "../item";
@Component({
  selector: 'list-item-1',
  templateUrl: './list-item-1.component.html',
  styleUrls: ['./list-item-1.component.css'],
  providers:[OrderService]
})
export class ListItem1Component implements OnInit {

  yh:any;
  @Input() new: any;
  @Input() sku: any;
  @Input() displayname: string;
  @Input() price: any;
  @Input() quantity: any;

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
    this.os.addOneToCart(this.yh);
  }
  removeCartOne(sku: any){
    this.yh = {
    Price:this.price,
    Sku:sku,
    Quantity:this.quantity,
    ItemDesc:this.displayname
  };
  this.os.removeOneToCart(this.yh);
}
}
