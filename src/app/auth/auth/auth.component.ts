import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit {

  constructor(
      private authSrv:AuthService,
      private router:Router,
      private route:ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  login(){
    this.authSrv.login()
    this.router.navigate([this.authSrv.afterLoginPath])
  }
  // logout(){
  //   this.authSrv.logout("")
  //   console.log("url",this.route.snapshot)////7
  //   // this.router.navigate(['/login'])
  // }
}
