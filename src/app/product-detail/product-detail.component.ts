import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from "@angular/router";
import { CatalogsService } from "../catalogs.service";
import { Location } from "@angular/common";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers:[CatalogsService]
})
export class ProductDetailComponent implements OnInit {
  SKU: any;
  constructor(private route:ActivatedRoute,private catalogService:CatalogsService) { }

  ngOnInit() {
      this.getProduct();   
  }
  getProduct(){
    this.route.paramMap.switchMap((params:ParamMap)=>this.catalogService.getProductById(params.get("sku"))).subscribe(x=>this.SKU=x[0]);
  }
}
