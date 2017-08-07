import {Injectable} from '@angular/core';
import {
    CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute,
    CanActivateChild
} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

    constructor(private authSrv: AuthService,) {
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable <boolean>
        | Promise <boolean>
        | boolean {
        // console.log("route",route)//
        // console.log("state",state)

        return this.authSrv.isAuthenticated()
            .then(
                (auth: boolean) => {
                    console.log("auth", auth)
                    return auth
                }
            )
    }

    canActivateChild(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable <boolean>
        | Promise <boolean>
        | boolean {
        return this.canActivate(route, state)
    }
}
