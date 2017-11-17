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
    trigger('loginState', [
      state('inactive', style({
        top:"-100vh"
      })),
      state('active',   style({
        top: "100px"
      })),
      transition('inactive => active', animate('400ms ease-in')),
      transition('active => inactive', animate('400ms ease-out'))
    ]),
    trigger('register', [
      state('inactive', style({
        left: "-100vw"
      })),
      state('active',   style({
        left: "0"
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
  public loginstate = 'inactive';
  public registerState = 'active';
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
  //show login panel
  toggleLoginState() {
    this.loginstate = this.loginstate === 'active' ? 'inactive' : 'active';
  }
  //show register panel
  registerToggle(){
    console.log("register");
    this.registerState = this.registerState === 'active' ? 'inactive' : 'active';
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
            this.registerState = 'inactive';
            this.loginstate = 'inactive';
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
        this.registerToggle();
        this.toggleLoginState();
      }
    });
  }
}
