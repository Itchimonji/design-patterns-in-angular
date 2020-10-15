import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactoryMethodRoutingModule } from './factory-method-routing.module';
import { FactoryMethodComponent } from './factory-method/factory-method.component';
import {AngularMaterialModule} from '../modules/angular-material.module';


@NgModule({
  declarations: [FactoryMethodComponent],
  imports: [
    CommonModule,
    FactoryMethodRoutingModule,
    AngularMaterialModule
  ]
})
export class FactoryMethodModule { }
