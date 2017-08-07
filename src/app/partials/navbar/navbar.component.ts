import {Component, OnInit,} from '@angular/core'
import {Router, ActivatedRoute, Event} from "@angular/router"
import {SharedService} from "../../shared/shared.service"
import {AuthService} from "../../auth/auth.service"

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

    currentUrl: string = ""

    constructor(private router: Router,
                private sharedSrv: SharedService,
                private authSrv: AuthService,
                private route: ActivatedRoute,) {
    }

    loggedIn: boolean;

    ngOnInit() {

        this.router.events.subscribe((event: Event) => {
            this.currentUrl = event["url"]
        })

        this.authSrv.authEvent.subscribe(
            (logged: boolean) => {
                this.loggedIn = logged
            }
        )
    }

    randomUrl() {
        this.router.navigate(['/', this.sharedSrv.randStr()]);
    }

    logout() {
        this.authSrv.logout()
    }
}
