import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter, Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable()
export class AuthService {

    private auth = false;
    authEvent = new EventEmitter < boolean > ();
    private timeWait = 1;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private location: Location, ) {

        this.authEvent.subscribe(
            (auth: boolean) =>  {
                this.auth = auth;
                // this.checkAuth()
                if ( ! auth) {
                    this.redirectIfNotAuth()
                }
            })
    }

    isAuthenticated(): Promise < boolean >  {
        return new Promise(
            (resolve, reject) =>  {
                setTimeout(
                    () =>  {
                        this.authEvent.emit(this.auth)
                        resolve(this.auth)
                    },
                    this.timeWait)

            })
    }

    login() {
        setTimeout(() =>  {
                // this.authEvent.emit(true)
                this.auth = true;
                this.redirectAfterLogin()
            }, this.timeWait)
    }

    redirectAfterLogin() {
        this.router.navigate([
            this.route.snapshot.queryParams['returnUrl'] || '/'
        ])
    }

    logout() {
        this.authEvent.emit(false)
    }

    redirectIfNotAuth() {
        let returnUrl: string;
        const route = this.router.parseUrl(this.location.path())
        const queryParams = route.queryParams
        /*
         Si el path tiene un return Url lo vuelve a asignar
         Si el path no tiene un return Url, asigna el path completo
         */
        returnUrl = ('returnUrl' in queryParams) ? queryParams['returnUrl'] : this.location.path()

        /*Testing Routes*/
        //        let date = new Date()
        //        let dateStr = `<${date.getMinutes()}:${date.getSeconds()}>`//
        //        console.log(
        //            `path ${dateStr} - ${this.location.path()}
        // queryParams ${dateStr} - ${JSON.stringify(queryParams)}
        // returnUrl ${dateStr} - ${returnUrl}`
        //        )
        this.router.navigate(['/login'],  {
            queryParams: {
                returnUrl: returnUrl
            },
        })
    }

}
