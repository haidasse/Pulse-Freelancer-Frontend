import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

    { path: 'error', component: ErrorComponent },
    { path: 'register', component : AuthentificationComponent  },
    { path: 'login', component:LoginComponent},
    { path: 'error', component:ErrorComponent},
    //{ path: '**', redirectTo: '/notfound' }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AuthRouting {
}
