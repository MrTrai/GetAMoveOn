import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MultiSelectModule} from 'primeng/multiselect';
import {AutoCompleteModule} from 'primeng/autocomplete';

@NgModule({
  imports: [
    CommonModule,
    MultiSelectModule,
    AutoCompleteModule
  ],
  exports: [
    MultiSelectModule,
    AutoCompleteModule
  ],
  declarations: []
})
export class NgPrimeModule { }
