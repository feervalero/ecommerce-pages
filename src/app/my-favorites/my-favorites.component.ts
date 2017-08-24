import { Component, OnInit,Input } from '@angular/core';
import { UserService } from "../user.service";
@Component({
  selector: 'my-favorites',
  templateUrl: './my-favorites.component.html',
  styleUrls: ['./my-favorites.component.css'],
  providers:[UserService]
})
export class MyFavoritesComponent implements OnInit {
  @Input() id: string;
  favs: any;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getFavoritesByProfile();
  }

  getFavoritesByProfile(){
    this.userService.getFavoritesByProfile(this.id).then(result=>this.favs=result);
  }

}
