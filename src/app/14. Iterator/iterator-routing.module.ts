import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IteratorComponent } from './iterator/iterator.component';

const routes: Routes = [{ path: '', component: IteratorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IteratorRoutingModule { }
