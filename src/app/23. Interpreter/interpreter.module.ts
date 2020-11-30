import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterpreterRoutingModule } from './interpreter-routing.module';
import { InterpreterComponent } from './interpreter/interpreter.component';


@NgModule({
  declarations: [InterpreterComponent],
  imports: [
    CommonModule,
    InterpreterRoutingModule
  ]
})
export class InterpreterModule { }
