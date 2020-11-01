import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IteratorRoutingModule } from './iterator-routing.module';
import { IteratorComponent } from './iterator/iterator.component';
import {AngularMaterialModule} from '../modules/angular-material.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [IteratorComponent],
  imports: [
    CommonModule,
    IteratorRoutingModule,
    AngularMaterialModule,
    FormsModule
  ]
})
export class IteratorModule { }
