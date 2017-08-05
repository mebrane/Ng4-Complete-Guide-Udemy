import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {RouterLink, Router, ActivatedRoute, Event} from "@angular/router";
import {SharedService} from "../../shared/shared.service";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  // providers:[SharedService]
  // directives:[RouterLink]
})
export class NavbarComponent implements OnInit {

  // @Output('navSelected') navSelected= new EventEmitter<string>();
  // item:string="recipes";
  currentUrl:string=""
  constructor(
      private router:Router,
      private sharedSrv:SharedService,
      private authSrv:AuthService,
      private route:ActivatedRoute,
  ) { }

  loggedIn:boolean;
  ngOnInit() {

    this.router.events.subscribe((event: Event) => {
      this.currentUrl=event["url"];
      // console.log(this.currentUrl);//this will give you required url

    })

    this.authSrv.authEvent.subscribe(
        (logged:boolean)=>{
          this.loggedIn=logged
        }
    )
  }

  randomUrl(){

    this.router.navigate(['/',this.sharedSrv.randStr()]);
  }
  // pageLink(link:string){
  //   this.router.navigate([link]);
  // }
  // onSelectNav(item:string){
  //   this.item=item;
  //   this.navSelected.emit(item);
  //   // console.log('Item from Nav: ',this.item);
  // }

  logout(){//
    // console.log("current",this.currentUrl)
     this.authSrv.logout()
  }
}
