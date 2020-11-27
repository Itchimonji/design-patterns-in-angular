import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateRoutingModule } from './state-routing.module';
import { StateComponent } from './state/state.component';
import { AngularMaterialModule } from '../modules/angular-material.module';

@NgModule({
  declarations: [StateComponent],
  imports: [
    CommonModule,
    StateRoutingModule,
    AngularMaterialModule
  ]
})
export class StateModule { }
