import { Component,OnInit } from '@angular/core';
import { MenusService } from "./menus.service";
export class Menu{
	id:string;
	name:string;
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
    this.menuActual=[{id:"",name:""}];
    this.getMenus();
  }
  getMenus(){
    this.menuActual.splice(0);
    this.menusService.getMenuAll().then(r=>{
      var menu = r;
      menu.submenu.forEach(element => {
        if(element.parent=="root"){
          this.menuActual.push({"id":element.id,name:element.displayname});
        }
      });
      
    });
    
  }
}
