import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { CookieModule } from "ngx-cookie";
import { ListMenuComponent } from "./list-menu/list-menu.component";
import { MainMenuComponent } from './main-menu/main-menu.component';
import { GridItem1Component } from './grid-item-1/grid-item-1.component';
import { LoginComponent } from "./login/login.component";
import { ListItem1Component } from './list-item-1/list-item-1.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
const routes: Routes = [
  {
    path:"", redirectTo:"/catalog-list",pathMatch:"full"
  },
  {
    path:"main", component:MainComponent
  },
  {
    path:"user", component:UserComponent
  },
  {
    path:"catalog-list", component:CatalogComponent,children:[
      {
        path:'',component:MainMenuComponent
      }
  ]
  },
  {
    path:"profile",component:ProfileComponent
  },
  {
    path:"product-detail/:sku",component:ProductDetailComponent
  },
  {
    path:"cart",component:CartComponent
  },
  {
    path:"grid-item-1",component:GridItem1Component
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"checkout",
    component:CheckoutComponent,
    children:[
      {
        path:"cart",
        component:CartComponent
      },
      {
        path:"address",
        component:AddressComponent
      },
      {
        path:"payment",
        component:PaymentComponent
      },
      {
        path:"confirmation",
        component:ConfirmationComponent
      }
    ]
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CatalogComponent,
    ProfileComponent,
    ListMenuComponent,
    LoginComponent,
    MyFavoritesComponent,
    MyAddressesComponent,
    MyPaymentsComponent,
    MyOrdersComponent,
    ProductDetailComponent,
    CartComponent,
    ProductListItemComponent,
    MainComponent,
    MainMenuComponent,
    GridItem1Component,
    ListItem1Component,
    CheckoutComponent,
    AddressComponent,
    PaymentComponent,
    ConfirmationComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CookieModule.forRoot(),
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
