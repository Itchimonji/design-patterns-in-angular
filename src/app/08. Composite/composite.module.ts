import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompositeRoutingModule } from './composite-routing.module';
import { CompositeComponent } from './composite/composite.component';

@NgModule({
  declarations: [CompositeComponent],
  imports: [
    CommonModule,
    CompositeRoutingModule
  ]
})
export class CompositeModule { }
