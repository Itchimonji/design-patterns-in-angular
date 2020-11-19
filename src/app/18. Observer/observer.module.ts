import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObserverRoutingModule } from './observer-routing.module';
import { ObserverComponent } from './observer/observer.component';
import {AngularMaterialModule} from '../modules/angular-material.module';


@NgModule({
  declarations: [ObserverComponent],
  imports: [
    CommonModule,
    ObserverRoutingModule,
    AngularMaterialModule
  ]
})
export class ObserverModule { }
