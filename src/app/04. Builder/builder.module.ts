import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderRoutingModule } from './builder-routing.module';
import { BuilderComponent } from './builder/builder.component';
import {AngularMaterialModule} from '../modules/angular-material.module';


@NgModule({
  declarations: [BuilderComponent],
  imports: [
    CommonModule,
    BuilderRoutingModule,
    AngularMaterialModule
  ]
})
export class BuilderModule { }
