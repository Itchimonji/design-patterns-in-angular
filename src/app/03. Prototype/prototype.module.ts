import { NgModule } from '@angular/core';
import { PrototypeComponent } from './prototype/prototype.component';
import { PrototypeRoutingModule } from './prototype.routes';
import {AngularMaterialModule} from '../modules/angular-material.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    PrototypeComponent
  ],
  imports: [
    PrototypeRoutingModule,
    AngularMaterialModule,
    CommonModule,
    FormsModule
  ]
})
export class PrototypeModule {}
