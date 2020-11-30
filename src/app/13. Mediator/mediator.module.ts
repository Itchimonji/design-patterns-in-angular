import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediatorRoutingModule } from './mediator-routing.module';
import { MediatorComponent } from './mediator/mediator.component';
import { AngularMaterialModule } from '../modules/angular-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MediatorComponent],
  imports: [CommonModule, MediatorRoutingModule, AngularMaterialModule, FormsModule]
})
export class MediatorModule {}
