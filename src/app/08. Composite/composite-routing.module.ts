import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompositeComponent } from './composite/composite.component';

const routes: Routes = [{ path: '', component: CompositeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompositeRoutingModule { }
