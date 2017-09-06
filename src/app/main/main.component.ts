import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    //if logged in -> get info from mongo and store it to cookie
    if(this.checkLogin() == true){

    }
    //else open cookie and show login button
    else{

    }
  }
  checkLogin(): boolean{

    return false;
  }

}
