import { Component, OnInit } from '@angular/core';
import { UserClass } from "../user-class/user-class.component";
import { UserService } from "../user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
})
export class UserComponent implements OnInit {
  users: UserClass[];
  constructor(private userService:UserService) { }
  selectedUser: UserClass;
  ngOnInit() {
    this.getUsers();
  }
  getUsers():void{
    this.userService.getUsersAPI().then(u=>this.users = u);
  }
  select(us:UserClass): void{
    this.selectedUser=us;
  }
}
