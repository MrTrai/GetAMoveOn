import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {DoctorComponent} from './doctor/doctor.component';
import {LoginComponent} from './login/login.component';
import {ChartCardComponent} from './common/chart-card/chart-card.component';
import {NgMaterialModule} from "./module/ng-material/ng-material.module";
import {NgPrimeModule} from "./module/ng-prime/ng-prime.module";


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DoctorComponent,
    LoginComponent,
    ChartCardComponent
  ],
  imports: [
    BrowserModule,
    NgMaterialModule,
    NgPrimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
