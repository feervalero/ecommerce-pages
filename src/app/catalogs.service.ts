import { Injectable } from '@angular/core';
import { Catalog } from "./Catalog";
import { Http } from "@angular/http";
@Injectable()
export class CatalogsService {

  constructor(private http:Http){}

  getCatalogList(): Promise<Catalog[]>{
    return this.http.get("http://localhost:3000/api/products")
                .toPromise()
                .then(response=>JSON.parse(response["_body"]) as Catalog)
                .catch(this.errorHandler);
  }
  getProductById(id: string): Promise<any>{
    return this.http.get("http://localhost:3000/api/products/"+id)
                .toPromise()
                .then(response=>JSON.parse(response["_body"]))
                .catch(this.errorHandler);
  }

  errorHandler(error: any): Promise<any>{
    console.log("error ocurred",error);
    return Promise.reject(error.message);
  }


}
