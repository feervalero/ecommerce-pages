import { Component, OnInit } from '@angular/core';
import { CatalogsService } from "../catalogs.service";
import { Catalog } from "../Catalog";
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers:[CatalogsService]
})
export class CatalogComponent implements OnInit {
  catalog:Catalog[];
  constructor(private catalogService:CatalogsService) { }

  ngOnInit() {
    this.getCatalog();
  }
  getCatalog():void{
    this.catalogService.getCatalogList().then(result=>this.catalog=result);
  } 

}
