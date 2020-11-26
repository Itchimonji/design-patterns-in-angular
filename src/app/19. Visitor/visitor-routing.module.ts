import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitorComponent } from './visitor/visitor.component';

const routes: Routes = [{ path: '', component: VisitorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
