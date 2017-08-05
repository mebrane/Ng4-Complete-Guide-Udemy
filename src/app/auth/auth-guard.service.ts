import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private authSrv: AuthService,) {
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable <boolean>
        | Promise <boolean>
        | boolean {

        return this.authSrv.checkAuth()
    }
}
