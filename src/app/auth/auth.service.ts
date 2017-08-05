import {Injectable, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute, Event, NavigationEnd, UrlTree} from "@angular/router";

@Injectable()
export class AuthService {

    private auth: boolean = false
    private curUrl: string;
    authEvent = new EventEmitter<boolean>();

    constructor(private router: Router,
                private route: ActivatedRoute,) {
        /*Subscribe to Router Events to get current url and queryParams*/
        this.router.events.subscribe(
            (ev: Event) => {
                if (ev instanceof NavigationEnd) {
                    this.curUrl = ev["url"]
                }
                // if (ev instanceof NavigationEnd) {
                //     /*the variable curUrl holds the current (active) route*/
                //     this.curUrl = ev["url"]
                //     /* the variable curUrlTree holds all params, queryParams, segments and fragments from the current (active) route */
                //     // this.curUrlTree = this.router.parseUrl(this.router.url);
                // }
            }
        )

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
            this.redirectAfterLogout()
            return false
        }
    }

    login() {
        this.authEvent.emit(true)
        this.redirectAfterLogin()
    }

    redirectAfterLogin(){
        this.router.navigate([
            this.route.snapshot.queryParams["returnUrl"] || "/"
        ])
    }

    logout() {
        this.authEvent.emit(false)
        this.redirectAfterLogout()
    }

    redirectAfterLogout() {
        // console.log("curUrl", this.curUrl);
        // console.log("curUrl2", this.route.snapshot.url[0].path);

        this.router.navigate(["/login"], {
            queryParams: {
                returnUrl: this.curUrl
            }
        })

    }
}
