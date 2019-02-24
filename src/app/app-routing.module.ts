import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './auth/logout/logout.component';

export const routes: Routes = [
    { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'logout', component: LogoutComponent },
    { path: '', redirectTo: 'index', pathMatch: 'full', data: { title: 'Tableau de bord' } },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
