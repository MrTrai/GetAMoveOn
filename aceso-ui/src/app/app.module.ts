import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {DoctorComponent} from './doctor/doctor.component';
import {LoginComponent} from './login/login.component';
import {ChartCardComponent} from './common/chart-card/chart-card.component';
import {NgMaterialModule} from "./module/ng-material/ng-material.module";
import {NgPrimeModule} from "./module/ng-prime/ng-prime.module";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "angularfire2/auth";
import {ClientServiceService} from "./service/client-service.service";
import {DoctorServiceService} from "./service/doctor-service.service";
import {FirebaseApiService} from "./service/firebase-api.service";
import {AppServiceService} from "./service/app-service.service";
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {DashboardLayoutComponent} from './dashboard-layout/dashboard-layout.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ClientSideComponent} from './client-side/client-side.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgSelectModule} from "@ng-select/ng-select";
import {ChartModule} from "angular2-highcharts";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {NgProgressModule} from "ngx-progressbar";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DoctorComponent,
    LoginComponent,
    ChartCardComponent,
    DashboardLayoutComponent,
    WelcomeComponent,
    ClientSideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,

    NgbModule.forRoot(),
    NgSelectModule,
    ChartModule,
    PerfectScrollbarModule,
    NgProgressModule,
    BrowserAnimationsModule,
    NgPrimeModule,

    NgMaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    ClientServiceService,
    DoctorServiceService,
    FirebaseApiService,
    AppServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
