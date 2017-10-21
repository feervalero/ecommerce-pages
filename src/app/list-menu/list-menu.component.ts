import { Component,SimpleChanges ,OnChanges,Input } from '@angular/core';
import { MenusService } from "../menus.service";
import { CookieService } from "ngx-cookie";
@Component({
  selector: 'list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css'],
  providers:[CookieService]
})
export class ListMenuComponent implements OnChanges {
  @Input() id:any;
  xml:any;
  PartIDs:any[] = [];
  viewType: any = 1;
  private localOrder:any;
  constructor(private menusService:MenusService, private cs:CookieService) { }

  ngOnChanges(changes:SimpleChanges) {
    if(changes.id.currentValue !== undefined){
      this.getSubMenu(changes.id.currentValue);
    }
    
  }
  switchView(x){
    return x == '1' ? this.viewType = '0' : this.viewType = '1';
  }
  getSubMenu(id: any){
    
    this.PartIDs = [];
    this.menusService.getMenus().then(data=>{
      var parse = new DOMParser();
      this.xml = parse.parseFromString(data,"text/xml");
      var menulists = this.xml.getElementsByTagName("menulist");
      for (var i = 0; i < menulists.length; i++) {
        if(menulists[i].attributes['id'].value.toString()==id){
          for (var j = 0; j < menulists[i].children.length; j++) {
            var sku = menulists[i].children[j].innerHTML;
            var products = this.xml.getElementsByTagName("Product");
            for (var k = 0; k < products.length; k++) {
              var product = products[k];
              if(product.attributes['sku'].value.toString()===sku){
                var item: any;
                item = {
                  img:"45",
                  displayname:product.attributes['name'].value.toString(),
                  sku:product.attributes['sku'].value.toString(),
                  price:product.attributes['unitRetailPrice'].value.toString(),
                  quantity:0
                };
                if(this.cs.getObject("order")){
                  this.localOrder = this.cs.getObject("order");
                  for(let dd of this.localOrder){
                    if(dd.Sku === product.attributes['sku'].value.toString()){
                      item = {
                        img:"45",
                        displayname:product.attributes['name'].value.toString(),
                        sku:product.attributes['sku'].value.toString(),
                        price:product.attributes['unitRetailPrice'].value.toString(),
                        quantity:  dd.Quantity
                      };
                    }
                  }
                }

                this.PartIDs.push(item);
              }
            }
            
          }
        }
      }
      
    })
  }


}
