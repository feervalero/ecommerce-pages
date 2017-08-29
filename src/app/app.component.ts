import { Component,OnInit } from '@angular/core';
import { MenusService } from "./menus.service";

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


  constructor(private menusService:MenusService){}

  ngOnInit(){
    this.menuActual=[{id:"",name:"",parent:""}];
    this.getMenus();
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
