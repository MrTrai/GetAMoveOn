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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgSelectModule} from "@ng-select/ng-select";
import {ChartModule} from "angular2-highcharts";
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {NgProgressModule} from "ngx-progressbar";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import {DoctorDashboardComponent} from './doctor-dashboard/doctor-dashboard.component';
import {HighChartUtilService} from "./service/high-chart-util.service";
import {HighchartsStatic} from "angular2-highcharts/dist/HighchartsService";
import {FirebaseComponent} from "./firebase/firebase.component";

export function highchartsFactory() {
  const hc = require('highcharts');
  const dd = require('highcharts/modules/drilldown');
  dd(hc);

  return hc;
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DoctorComponent,
    LoginComponent,
    ChartCardComponent,
    DashboardLayoutComponent,
    WelcomeComponent,
    ClientSideComponent,
    UserDashboardComponent,
    DoctorDashboardComponent,
    ChartCardComponent,
    FirebaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
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
    HighChartUtilService,
    AppServiceService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
