import {NgModule} from '@angular/core';
import {AbstractFactoryComponent} from './abstract-factory/abstract-factory.component';
import {AngularMaterialModule} from '../modules/angular-material.module';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AbstractFactoryRoutingModule} from './abstract-factory.routes';

@NgModule({
  declarations: [
    AbstractFactoryComponent
  ],
  imports: [
    AngularMaterialModule,
    FormsModule,
    CommonModule,
    AbstractFactoryRoutingModule
  ]
})
export class AbstractFactoryModule { }
