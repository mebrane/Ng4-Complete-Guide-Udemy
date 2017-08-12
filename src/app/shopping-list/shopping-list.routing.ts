import {Routes, RouterModule} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list.component";
import {AuthGuardService} from "../auth/auth-guard.service";
const routes: Routes = [
    {
        path: 'shopping-list',
        component: ShoppingListComponent,
        canActivate: [AuthGuardService],
        data: {
            name: "shopping-list"
        }
    },
]

export const ShoppingListRouting = RouterModule.forChild(routes)