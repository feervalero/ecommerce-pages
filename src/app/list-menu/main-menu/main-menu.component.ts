import { Component, OnInit } from '@angular/core';
import { MenusService } from "../../menus.service";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  providers:[MenusService]
})
export class MainMenuComponent implements OnInit {
  menus:any;
  menuItems:any[] = [];
  initMenuItems:any[] = [];
  idItem:any = "root";
  previousParent:any = "";
  constructor(private menuService:MenusService) { }

  ngOnInit() {
    this.getMenus();
  }
  showNav(){
    var d = document.getElementById("main-menu-nav");
    d.style.zIndex="99";
    d.className="show-nav";
    
  }
  closeNav(){
    var d = document.getElementById("main-menu-nav");
    d.className="hide-nav";
    
  }
  getMenus(){
    this.menuService.getMenus().then(xml=>{
      var parser = new DOMParser();
      this.menus = parser.parseFromString(xml,"text/xml");
      var mcs = this.menus.getElementsByTagName("menuItem");
      for (var i = 0; i < mcs.length; i++) {
        if(mcs[i].attributes['parent'].value.toString()=="root"){
          this.initMenuItems.push({
            parent:mcs[i].attributes["parent"].value,
            id:mcs[i].attributes["id"].value,
            collapsed:"1",
            href:mcs[i].attributes["id"].value,
            displayname:mcs[i].attributes["displayName"].value.toString()
          });
        }
      }
    });
    this.menuItems = this.initMenuItems;
  }

  openMenu(id: string,pp: string){
    
    this.initMenuItems.splice(0,this.initMenuItems.length);
  
    //abrir menu con papa id
    this.idItem = id;
    var parser = new DOMParser();
    var mcs = this.menus.getElementsByTagName("menuItem");
    for (var i = 0; i < mcs.length; i++) {
      if(mcs[i].attributes['parent'].value.toString()==id){
        this.initMenuItems.push({
          parent:mcs[i].attributes["parent"].value,
          id:mcs[i].attributes["id"].value,
          collapsed:"1",
          href:mcs[i].attributes["id"].value,
          displayname:mcs[i].attributes["displayName"].value.toString()
        });
      }
      if(mcs[i].attributes['id'].value.toString()==id){
        this.previousParent = mcs[i].attributes['parent'].value.toString();
      }
    }
  } 
}
//this is a new change - this is a new change