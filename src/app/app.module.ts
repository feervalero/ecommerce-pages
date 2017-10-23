import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from "@angular/router";
import { UserService } from "./user.service";
import { HttpModule } from "@angular/http";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './checkout/cart/cart.component';
import { CookieModule } from "ngx-cookie";
import { ListMenuComponent } from "./list-menu/list-menu.component";
import { MainMenuComponent } from './list-menu/main-menu/main-menu.component';
import { GridItem1Component } from './list-menu/grid-item-1/grid-item-1.component';
import { LoginComponent } from "./login/login.component";
import { ListItem1Component } from './list-menu/list-item-1/list-item-1.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressComponent } from './checkout/address/address.component';
import { PaymentComponent } from './checkout/payment/payment.component';
import { ConfirmationComponent } from './checkout/confirmation/confirmation.component';
const routes: Routes = [
  {
    path:"", redirectTo:"/catalog-list",pathMatch:"full"
  },
  {
    path:"catalog-list", children:[
      {
        path:'',component:MainMenuComponent
      }
  ]
  },
  {
    path:"product-detail/:sku",component:ProductDetailComponent
  },
  {
    path:"cart",component:CartComponent
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
    ListMenuComponent,
    LoginComponent,
    ProductDetailComponent,
    CartComponent,
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
