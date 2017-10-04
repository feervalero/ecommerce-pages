import { Component,OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie";
import {  trigger,  state,  style,  animate,  transition} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        transform: 'translateY(-150%)'
      })),
      state('active',   style({
        transform: 'translateY(0%)'
      })),
      transition('inactive => active', animate('400ms ease-in')),
      transition('active => inactive', animate('400ms ease-out'))
    ]),
    trigger('registerState', [
      state('inactive', style({
        transform: 'translateY(220vh)'
      })),
      state('active',   style({
        transform: 'translateY(0vh)'
      })),
      transition('inactive => active', animate('400ms ease-in')),
      transition('active => inactive', animate('400ms ease-out'))
    ])
  ]
})


export class AppComponent implements OnInit{
  title = 'e-Commerce';
  BAG: any = {
    count:2
  };
  status: boolean = false;
  public state = 'inactive';
  public register = 'inactive';
  constructor(private cookieService:CookieService){}

  ngOnInit(){
    //this.cookieService.putObject("order",this.orderExample);
    //console.log(this.getCookie("order"));
  }
  getCookie(key:string){
    return this.cookieService.getObject(key);
  }
  loginShow(st: boolean){
    if(st == false){

    }
  }
  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
  registerShow(){
    this.register = this.register === 'active' ? 'inactive' : 'active';
  }
  
}
