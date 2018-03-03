import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule {
}
