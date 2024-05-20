import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { LeftbarComponent } from './layout/leftbar/leftbar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { AdminDashboardComponent } from './all-components/admin-dashboard/admin-dashboard.component';
import { NotfoundComponent } from './all-components/notfound/notfound.component';
import { AuthentificationComponent } from './all-components/auth/authentification/authentification.component';
import { LoginComponent } from './all-components/auth/login/login.component';
import { ErrorComponent } from './all-components/auth/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LeftbarComponent,
    TopbarComponent,
    AdminDashboardComponent,
    NotfoundComponent,
    AuthentificationComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
