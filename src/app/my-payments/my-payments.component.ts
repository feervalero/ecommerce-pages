import { Component, OnInit, Input } from '@angular/core';
import { UserService } from "../user.service";
@Component({
  selector: 'my-payments',
  templateUrl: './my-payments.component.html',
  styleUrls: ['./my-payments.component.css']
})
export class MyPaymentsComponent implements OnInit {
  @Input() id:string;
  payments:any;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getPayments();
  }
  getPayments(){
    this.userService.getPaymentsById(this.id).then(r=>this.payments=r);
  }

}
