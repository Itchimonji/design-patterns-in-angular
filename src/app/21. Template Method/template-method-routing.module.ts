import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateMethodComponent } from './template-method/template-method.component';

const routes: Routes = [{ path: '', component: TemplateMethodComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateMethodRoutingModule {}
