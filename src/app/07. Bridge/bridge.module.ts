import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BridgeRoutingModule } from './bridge-routing.module';
import { BridgeComponent } from './bridge/bridge.component';
import {AngularMaterialModule} from '../modules/angular-material.module';


@NgModule({
  declarations: [BridgeComponent],
  imports: [
    CommonModule,
    BridgeRoutingModule,
    AngularMaterialModule
  ]
})
export class BridgeModule { }
