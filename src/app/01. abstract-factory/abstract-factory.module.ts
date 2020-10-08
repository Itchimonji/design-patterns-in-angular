import {NgModule} from '@angular/core';
import {AbstractFactoryComponent} from './abstract-factory/abstract-factory.component';
import {AngularMaterialModule} from '../modules/angular-material.module';
import {AbstractFactoryRoutingModule} from './abstract-factory.routes';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AbstractFactoryComponent
  ],
  imports: [
    AngularMaterialModule,
    AbstractFactoryRoutingModule,
    FormsModule,
    CommonModule
  ]
})
export class AbstractFactoryModule { }
