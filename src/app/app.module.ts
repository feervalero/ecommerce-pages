import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RouterModule,Routes } from "@angular/router";
import { UserService } from "./user.service";
import { HttpModule } from "@angular/http";
import { CatalogComponent } from './catalog/catalog.component';
import { ProfileComponent } from './profile/profile.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { MyAddressesComponent } from './my-addresses/my-addresses.component';
import { MyPaymentsComponent } from './my-payments/my-payments.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:"", redirectTo:"/main",pathMatch:"full"
  },
  {
    path:"main", component:MainComponent
  },
  {
    path:"user", component:UserComponent
  },
  {
    path:"catalog-list", component:CatalogComponent
  },
  {
    path:"profile",component:ProfileComponent
  },
  {
    path:"product-detail/:sku",component:ProductDetailComponent
  },
  {
    path:"cart",component:CartComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CatalogComponent,
    ProfileComponent,
    MyFavoritesComponent,
    MyAddressesComponent,
    MyPaymentsComponent,
    MyOrdersComponent,
    ProductDetailComponent,
    CartComponent,
    ProductListItemComponent,
    MainComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
