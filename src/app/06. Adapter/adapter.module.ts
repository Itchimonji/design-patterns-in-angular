import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdapterRoutingModule } from './adapter-routing.module';
import { AdapterComponent } from './adapter/adapter.component';
import {AngularMaterialModule} from "../modules/angular-material.module";


@NgModule({
  declarations: [AdapterComponent],
  imports: [
    CommonModule,
    AdapterRoutingModule,
    AngularMaterialModule
  ]
})
export class AdapterModule { }
