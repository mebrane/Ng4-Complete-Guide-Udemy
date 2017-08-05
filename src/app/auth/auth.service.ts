import {Injectable, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute,} from "@angular/router";
import {Location} from "@angular/common";

@Injectable()
export class AuthService {

    private auth: boolean = false;
    authEvent = new EventEmitter<boolean>();

    constructor(private router: Router,
                private route: ActivatedRoute,
                private location: Location,) {

        this.authEvent.subscribe(
            (auth: boolean) => {
                this.auth = auth;
                this.checkAuth()
            }
        )
    }

    checkAuth(): boolean {
        if (this.auth) {
            return true
        } else {
            this.redirectIfNotAuth()
            return false
        }
    }

    login() {
        this.authEvent.emit(true)
        this.redirectAfterLogin()
    }

    redirectAfterLogin() {
        this.router.navigate([
            this.route.snapshot.queryParams["returnUrl"] || "/"
        ])
    }

    logout() {
        this.authEvent.emit(false)
    }

    redirectIfNotAuth() {

        //Default
        let returnUrl: string = "/";

        let queryParams = this.router.parseUrl(this.location.path()).queryParams;

        /*
         Si el path tiene un return Url lo vuelve a asignar
         Si el path no tiene un return Url, asigna el path completo
         */
        if ("returnUrl" in queryParams) {
            returnUrl = queryParams["returnUrl"]
        } else {
            returnUrl = this.location.path()
        }

        /*Testing Routes*/
        //        let date = new Date()
        //        let dateStr = `<${date.getMinutes()}:${date.getSeconds()}>`//
        //        console.log(
        //            `path ${dateStr} - ${this.location.path()}
        // queryParams ${dateStr} - ${JSON.stringify(queryParams)}
        // returnUrl ${dateStr} - ${returnUrl}`
        //        )
        this.router.navigate(["/login"], {
            queryParams: {
                returnUrl: returnUrl
            }
        })
    }
}
