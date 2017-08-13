import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'login',
        component: AuthComponent,
    },
]

export const AuthRouting = RouterModule.forChild(routes)
