import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecoratorRoutingModule } from './decorator-routing.module';
import { DecoratorComponent } from './decorator/decorator.component';
import { AngularMaterialModule } from '../modules/angular-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DecoratorComponent],
  imports: [CommonModule, DecoratorRoutingModule, AngularMaterialModule, FormsModule]
})
export class DecoratorModule {}
