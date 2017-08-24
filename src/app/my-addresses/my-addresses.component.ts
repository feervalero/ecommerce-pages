import { Component, OnInit,Input } from '@angular/core';
import { UserService } from "../user.service";
@Component({
  selector: 'my-addresses',
  templateUrl: './my-addresses.component.html',
  styleUrls: ['./my-addresses.component.css'],
  providers:[UserService]
})
export class MyAddressesComponent implements OnInit {
  @Input() id:string;
  addresses:any;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getAddresses();
  }
  getAddresses(){
    this.userService.getAddressesById(this.id).then(r=>this.addresses=r);
  }

}
