import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AuthguardGuard } from './authguard.guard';


const appRoutes : Routes = [
    {
        path: '', 
        component:LoginComponent
    },
    {
        path: 'users', 
        component:UsersComponent,
        canActivate: [AuthguardGuard]
    },
    {
        path: '**', 
        component:LoginComponent
    },
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})

export class AppRouteModule {

}