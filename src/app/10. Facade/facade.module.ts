import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacadeRoutingModule } from './facade-routing.module';
import { FacadeComponent } from './facade/facade.component';
import {AngularMaterialModule} from "../modules/angular-material.module";


@NgModule({
  declarations: [FacadeComponent],
  imports: [
    CommonModule,
    FacadeRoutingModule,
    AngularMaterialModule
  ]
})
export class FacadeModule { }
