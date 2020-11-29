import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChainOfResponsibilityRoutingModule } from './chain-of-responsibility-routing.module';
import { ChainOfResponsibilityComponent } from './chain-of-responsibility/chain-of-responsibility.component';
import {AngularMaterialModule} from '../modules/angular-material.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ChainOfResponsibilityComponent],
  imports: [
    CommonModule,
    ChainOfResponsibilityRoutingModule,
    AngularMaterialModule,
    FormsModule
  ]
})
export class ChainOfResponsibilityModule { }
