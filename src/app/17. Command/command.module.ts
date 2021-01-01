import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandRoutingModule } from './command-routing.module';
import { CommandComponent } from './command/command.component';
import { AngularMaterialModule } from '../modules/angular-material.module';


@NgModule({
  declarations: [CommandComponent],
    imports: [
        CommonModule,
        CommandRoutingModule,
        AngularMaterialModule
    ]
})
export class CommandModule { }
