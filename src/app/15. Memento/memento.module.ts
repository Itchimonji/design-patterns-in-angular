import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MementoRoutingModule } from './memento-routing.module';
import { MementoComponent } from './memento/memento.component';
import {AngularMaterialModule} from '../modules/angular-material.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [MementoComponent],
  imports: [
    CommonModule,
    MementoRoutingModule,
    AngularMaterialModule,
    FormsModule
  ]
})
export class MementoModule { }
