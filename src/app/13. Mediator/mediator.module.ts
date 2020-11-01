import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediatorRoutingModule } from './mediator-routing.module';
import { MediatorComponent } from './mediator/mediator.component';


@NgModule({
  declarations: [MediatorComponent],
  imports: [
    CommonModule,
    MediatorRoutingModule
  ]
})
export class MediatorModule { }
