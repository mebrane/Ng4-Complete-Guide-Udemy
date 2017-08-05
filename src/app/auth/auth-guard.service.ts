import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(
      private authSrv:AuthService,
      private router:Router,
      private route:ActivatedRoute,
  ) { }

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  )
      : Observable <boolean>
      | Promise <boolean>
      | boolean {

    if( this.authSrv.logged())
      return true
    else
      // console.log("path",route.url)
      this.router.navigate(["/login"])
    return false
  }
}
