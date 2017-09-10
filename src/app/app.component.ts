import { Component,OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'e-Commerce';
  BAG: any = {
    count:2
  };
  status: boolean = false;
  
  constructor(private cookieService:CookieService){}

  ngOnInit(){
    //this.cookieService.putObject("order",this.orderExample);
    //console.log(this.getCookie("order"));
  }
  getCookie(key:string){
    return this.cookieService.getObject(key);
  }
  
}
