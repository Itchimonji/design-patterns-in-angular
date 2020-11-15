import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandRoutingModule } from './command-routing.module';
import { CommandComponent } from './command/command.component';


@NgModule({
  declarations: [CommandComponent],
  imports: [
    CommonModule,
    CommandRoutingModule
  ]
})
export class CommandModule { }
