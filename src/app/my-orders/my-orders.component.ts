import { Component, OnInit, Input } from '@angular/core';
import { UserService } from "../user.service";
@Component({
  selector: 'my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
  providers:[UserService]
})
export class MyOrdersComponent implements OnInit {
  userOrders:any;
  @Input() id:string;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getOrders();
  }
  getOrders(){
    this.userService.getOrdersByProfile(this.id).then(res=>this.userOrders=res);
  }
  

}
