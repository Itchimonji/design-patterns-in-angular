import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StrategyRoutingModule } from './strategy-routing.module';
import { StrategyComponent } from './strategy/strategy.component';
import {AngularMaterialModule} from '../modules/angular-material.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [StrategyComponent],
  imports: [
    CommonModule,
    StrategyRoutingModule,
    AngularMaterialModule,
    FormsModule
  ]
})
export class StrategyModule { }
