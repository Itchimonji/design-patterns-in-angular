import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactoryMethodRoutingModule } from './factory-method-routing.module';
import { FactoryMethodComponent } from './factory-method/factory-method.component';


@NgModule({
  declarations: [FactoryMethodComponent],
  imports: [
    CommonModule,
    FactoryMethodRoutingModule
  ]
})
export class FactoryMethodModule { }
