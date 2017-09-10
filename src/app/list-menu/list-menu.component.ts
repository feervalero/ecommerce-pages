import { Component,SimpleChanges ,OnChanges,Input } from '@angular/core';
import { MenusService } from "../menus.service";
@Component({
  selector: 'list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnChanges {
  @Input() id:any;
  xml:any;
  constructor(private menusService:MenusService) { }

  ngOnChanges(changes:SimpleChanges) {
    if(changes.id.currentValue !== undefined){
      this.getSubMenu(changes.id.currentValue);
    }
  }
  getSubMenu(id: any){
  
    this.menusService.getMenus().then(data=>{
      var parse = new DOMParser();
      this.xml = parse.parseFromString(data,"text/xml");
      var mcs = this.xml.getElementsByTagName("menuItem");
      for (var i = 0; i < mcs.length; i++) {
        if(mcs[i].attributes['parent'].value.toString()==id){
          console.log({
            parent:mcs[i].attributes["parent"].value,
            id:mcs[i].attributes["id"].value,
            collapsed:"1",
            href:mcs[i].attributes["id"].value,
            displayname:mcs[i].attributes["displayName"].value.toString()
          });
        }
      }
    })
  }

}
