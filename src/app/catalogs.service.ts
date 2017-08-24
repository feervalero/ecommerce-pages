import { Injectable } from '@angular/core';
import { Catalog } from "./Catalog";
import { Http } from "@angular/http";
@Injectable()
export class CatalogsService {

  constructor(private http:Http){}

  getCatalogList(): Promise<Catalog[]>{
    return this.http.get("http://localhost:3000/products")
                .toPromise()
                .then(response=>JSON.parse(response["_body"]) as Catalog)
                .catch(this.errorHandler);
  }
  errorHandler(error: any): Promise<any>{
    console.log("error ocurred",error);
    return Promise.reject(error.message);
  }

}
