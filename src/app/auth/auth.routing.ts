import {Routes, RouterModule} from "@angular/router";
import {AuthComponent} from "./auth/auth.component";

const routes: Routes = [
    {
        path: 'login',
        component: AuthComponent,
    },
]

export const AuthRouting = RouterModule.forChild(routes)