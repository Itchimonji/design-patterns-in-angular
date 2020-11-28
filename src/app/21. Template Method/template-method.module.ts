import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateMethodRoutingModule } from './template-method-routing.module';
import { TemplateMethodComponent } from './template-method/template-method.component';
import {AngularMaterialModule} from '../modules/angular-material.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [TemplateMethodComponent],
  imports: [CommonModule, TemplateMethodRoutingModule, AngularMaterialModule, MatCheckboxModule, FormsModule]
})
export class TemplateMethodModule {}
