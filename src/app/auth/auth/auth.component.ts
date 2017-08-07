import {Component, OnInit, ViewEncapsulation} from '@angular/core'
import {AuthService} from "../auth.service"

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
    // encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit {

    constructor(private authSrv: AuthService,) {
    }

    ngOnInit() {
    }

    login() {
        this.authSrv.login()
    }
}
