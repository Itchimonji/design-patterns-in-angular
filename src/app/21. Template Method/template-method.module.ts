import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateMethodRoutingModule } from './template-method-routing.module';
import { TemplateMethodComponent } from './template-method/template-method.component';

@NgModule({
  declarations: [TemplateMethodComponent],
  imports: [CommonModule, TemplateMethodRoutingModule]
})
export class TemplateMethodModule {}
