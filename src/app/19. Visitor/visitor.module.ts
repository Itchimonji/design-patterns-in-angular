import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { VisitorComponent } from './visitor/visitor.component';
import {AngularMaterialModule} from '../modules/angular-material.module';


@NgModule({
  declarations: [VisitorComponent],
  imports: [
    CommonModule,
    VisitorRoutingModule,
    AngularMaterialModule
  ]
})
export class VisitorModule { }
