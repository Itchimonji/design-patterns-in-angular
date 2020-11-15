import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObserverRoutingModule } from './observer-routing.module';
import { ObserverComponent } from './observer.component';


@NgModule({
  declarations: [ObserverComponent],
  imports: [
    CommonModule,
    ObserverRoutingModule
  ]
})
export class ObserverModule { }
