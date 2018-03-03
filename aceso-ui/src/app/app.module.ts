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
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseComponent } from './firebase/firebase.component';
import {HouseholdService} from "./service/household.service";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DoctorComponent,
    LoginComponent,
    ChartCardComponent,
    FirebaseComponent
  ],
  imports: [
    BrowserModule,
    NgMaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgPrimeModule
  ],
  providers: [
    ClientServiceService,
    DoctorServiceService,
    FirebaseApiService,
    HouseholdService,
    AppServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
