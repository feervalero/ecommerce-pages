import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from "@angular/router";
import { CatalogsService } from "../catalogs.service";
import { Location } from "@angular/common";
import { MenusService } from "../menus.service";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers:[CatalogsService,MenusService]
})
export class ProductDetailComponent implements OnInit {
  SKU: any;
  xml:any; 
  constructor(private route:ActivatedRoute,private catalogService:CatalogsService,private menuService: MenusService) { }

  ngOnInit() {
      
      this.getProduct();   
  }
  getProductInformation(i: any):Promise<any>{
    this.menuService.getMenus().then(xml=>{
      var parse =new DOMParser();
      this.xml = parse.parseFromString(xml,"text/xml");
      let items = this.xml.getElementsByTagName("Product");
      for(let item of items){
        if(item.attributes['sku'].value && (item.attributes["sku"].value==i)){
          var ii = {
            sku:item.attributes["sku"].value,
            name:item.attributes["name"].value,
            price:item.attributes["unitRetailPrice"].value
          };
          this.SKU = ii;
        }
      }

    });
    return i;
  }
  getProduct(){
    
    this.route.paramMap.switchMap((params:ParamMap)=>this.getProductInformation(params.get("sku"))).subscribe(x=>{
      this.SKU=x[0];
    });
    
  }
}
