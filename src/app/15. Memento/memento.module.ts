import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MementoRoutingModule } from './memento-routing.module';
import { MementoComponent } from './memento/memento.component';


@NgModule({
  declarations: [MementoComponent],
  imports: [
    CommonModule,
    MementoRoutingModule
  ]
})
export class MementoModule { }
