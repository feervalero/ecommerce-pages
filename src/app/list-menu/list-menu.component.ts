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
  PartIDs:any[] = [];
  constructor(private menusService:MenusService) { }

  ngOnChanges(changes:SimpleChanges) {
    if(changes.id.currentValue !== undefined){
      this.getSubMenu(changes.id.currentValue);
      console.dir(this.PartIDs);
    }
    
  }
  getSubMenu(id: any){
    this.PartIDs = [];
    console.log("id",id);
    this.menusService.getMenus().then(data=>{
      var parse = new DOMParser();
      this.xml = parse.parseFromString(data,"text/xml");
      var menulists = this.xml.getElementsByTagName("menulist");
      for (var i = 0; i < menulists.length; i++) {
        if(menulists[i].attributes['id'].value.toString()==id){
          for (var j = 0; j < menulists[i].children.length; j++) {
            var sku = menulists[i].children[j].innerHTML;
            this.PartIDs.push(sku);
          }
        }
      }
      
    })
  }

}
