import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlyweightRoutingModule } from './flyweight-routing.module';
import { FlyweightComponent } from './flyweight/flyweight.component';
import {AngularMaterialModule} from '../modules/angular-material.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [FlyweightComponent],
  imports: [
    CommonModule,
    FlyweightRoutingModule,
    AngularMaterialModule,
    FormsModule
  ]
})
export class FlyweightModule { }
