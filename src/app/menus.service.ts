import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenusService{

  constructor(private http:Http) { }

  getMenuAll():Promise<any>{
    return this.http.get("http://localhost:3000/api/menus")
                    .toPromise()
                    .then(r=>JSON.parse(r["_body"])[0])
                    .catch(this.ErrorHandler);
  }

  getMenus(): Promise<any>{
    var xmlDoc;
    //load xml
    var parser = new DOMParser();
    return this.http.request("assets/CATALOGXML.xml").toPromise().then(r=>r["_body"]);
      /*
      xmlDoc = parser.parseFromString(x["_body"],"text/xml");
      var mcs = xmlDoc.getElementsByTagName("menuItem");
      var menuBar = document.getElementById("menuBar");
      menuBar.innerHTML="";
      for (var i = 0; i < mcs.length; i++) {
        if(mcs[i].attributes['parent'].value.toString()=="root"){
          var span = document.createElement("a");
          var li = document.createElement("li");
          
          span.setAttribute("parent",mcs[i].attributes["parent"].value);
          span.setAttribute("id",mcs[i].attributes["id"].value);
          span.setAttribute("collapsed","1");
          span.setAttribute("href","/catalog-list/"+mcs[i].attributes["id"].value);
          span.innerHTML=mcs[i].attributes["displayName"].value.toString();
          li.appendChild(span);
  
          li.setAttribute("parent",mcs[i].attributes["parent"].value);
          li.setAttribute("id",mcs[i].attributes["id"].value);
          li.setAttribute("collapsed","1");
          menuBar.appendChild(li);
        }
      }
    });*/
    
  }

  ErrorHandler(error: any):Promise<any>{
    console.log("Error has occurred",error);
    return Promise.reject(error.message);
  }
  
}
