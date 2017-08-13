import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    CanLoad,
    Route,
    Router,
    RouterStateSnapshot
    } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {

    constructor(private authSrv: AuthService, ) {
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable < boolean >  | Promise < boolean >  | boolean {
        // console.log("route",route)//
        // console.log("state",state)

        return this.authSrv.isAuthenticated()
            .then(
                (auth: boolean) =>  {
                    console.log('auth', auth)
                    return auth
                }
            )
    }

    canActivateChild(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable < boolean >  | Promise < boolean >  | boolean {
        return this.canActivate(route, state)
    }

    canLoad(route: Route): Observable < boolean >| Promise < boolean >| boolean {
        return this.authSrv.isAuthenticated()
            .then(
                (auth: boolean) =>  {
                    console.log('auth', auth)
                    return auth
                }
            )
    }
}
