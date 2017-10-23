import { Component,OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie";
import { UserService } from "./user.service";
import { trigger,  state,  style,  animate,  transition} from '@angular/animations';
import { User } from "./user";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        transform: 'translateY(-150%)'
      })),
      state('active',   style({
        transform: 'translateY(0%)'
      })),
      transition('inactive => active', animate('400ms ease-in')),
      transition('active => inactive', animate('400ms ease-out'))
    ]),
    trigger('registerState', [
      state('inactive', style({
        transform: 'translateY(220vh)'
      })),
      state('active',   style({
        transform: 'translateY(0vh)'
      })),
      transition('inactive => active', animate('400ms ease-in')),
      transition('active => inactive', animate('400ms ease-out'))
    ]),
    trigger('cartState',[
      state('cart',style({
        transform:'rotateY(0deg)'
      })),
      state('count',style({
        transform:'rotateY(90deg)',
      })),
      transition('cart => count', animate('300ms ease-in')),
      transition('count => cart', animate('300ms ease-out'))
    ])
  ],
  providers:[UserService]
})


export class AppComponent implements OnInit{
  title = 'e-Commerce';
  BAG: any = {
    count:2
  };
  new_user:any;
  login:any = {
    status:false,
    email:'',
    password:''
  }
  public state = 'inactive';
  public register = 'inactive';
  public cart  = "cart";
  constructor(private cookieService:CookieService,private userService:UserService){}
  public a: any;
  ngOnInit(){
    //this.cookieService.putObject("order",this.orderExample);
    //console.log(this.getCookie("order"));
    this.new_user =this.cookieService.getObject("user");
    if(this.cookieService.getObject("user")){
      this.login.status = true;
    }else{
      this.new_user={
        first_name:'',
        middle_name:'',
        last_name:'',
        country:'',
        state:'',
        city:'',
        neigh:'',
        postal_code:'',
        street_number:'',
        email:'',
        phone:'',
        age:'',
        genre:''
      }
    }
    if(this.cookieService.getObject("order")){
      this.a = this.cookieService.getObject("order");
      this.BAG.count = this.a.length;
    }

    
  }
  getCookie(key:string){
    return this.cookieService.getObject(key);
  }
  loginShow(st: boolean){
    if(st == false){

    }
  }
  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
  toggleStatus() {
    this.login.status = this.login.status === true ? false : true;
  }
  registerShow(){
    this.register = this.register === 'active' ? 'inactive' : 'active';
  }
  rotateBag(){
    this.cart = this.cart === 'cart' ? 'count' : 'cart';
    console.log("cart",this.cart);
  }
  drawer_open(){
    var d = document.getElementById("drawer");
    d.className += " drawer-open";

    var d = document.getElementById("drawer-shadow");
    d.className += " shadow-open";
  }
  close_all(){
    var e = document.getElementById("drawer");
    e.className = '';

    var es = document.getElementById("drawer-shadow");
    es.className = '';
  }
  saveInformation(){
    if(this.new_user.email!=''){
      this.userService.searchByEmail(this.new_user.email).then(x =>{
        console.log("user with this mail ",x);
        if(x === null){
          this.userService.addUser(this.new_user).then(y=>{
            console.log("insert response",y._id);
            this.cookieService.putObject("user",y);
            this.login.status = true;
            this.register = 'inactive';
            this.state = 'inactive';
            //registered animation
          });
        }
      });
    }
  }
  loginWithEmail(){
    console.log("loggin in with:",this.login);
    this.userService.searchByEmail(this.login.email).then(res => {
      if(res == null){
          
      }else{
        this.new_user = res;
        this.cookieService.putObject("user",res);
        this.registerShow();
        this.toggleState();
        this.toggleStatus();
      }
    });
  }
}
