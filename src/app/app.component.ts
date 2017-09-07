import { Component,OnInit } from '@angular/core';
import { MenusService } from "./menus.service";
import { CookieService } from "ngx-cookie";
export class Menu{
	id:string;
  name:string;
  parent:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MenusService]
})


export class AppComponent implements OnInit{
  title = 'e-Commerce';
  menuJSON: any;
  menuActual: Menu[];
  BAG: any = {
    count:2
  };
  status: boolean = false;
  orderExample: any = {
    contact:"01010101",
    created_date:"2017-07-02 15:22:33.000",
    stage:"90",
    status:"1",
    products:{
      sku:"10011002",
      quantity:"2",
      name:"Corrector Facial Precio Especial",
      price:"1050.50",
      price_discount:"700"
    },
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

  constructor(private cookieService:CookieService,private menusService:MenusService){}

  ngOnInit(){
    this.menuActual=[{id:"",name:"",parent:""}];
    this.getMenus();
    this.cookieService.putObject("order",this.orderExample);
    console.log(this.getCookie("order"));
  }
  getCookie(key:string){
    return this.cookieService.getObject(key);
  }
  getMenus(){
    this.menuActual.splice(0);
    this.menusService.getMenuAll().then(r=>{
      var menu = r;
      this.menuJSON = r;
      menu.submenu.forEach(element => {
        if(element.parent=="root"){
          this.menuActual.push({"id":element.id,name:element.displayname,parent:element.parent});
        }
      });
      
    });
  }


  menuAction1(menu: Menu){
    console.dir(this.menuJSON);
    console.log(menu.id);
    console.dir(this.menuJSON.submenu[menu.id]);
  }
}
