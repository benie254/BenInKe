import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoemsRoutingModule } from './poems-routing.module';
import { PoemsComponent } from './poems.component';


@NgModule({
  declarations: [
    PoemsComponent
  ],
  imports: [
    CommonModule,
    PoemsRoutingModule
  ]
})
export class PoemsModule { }
