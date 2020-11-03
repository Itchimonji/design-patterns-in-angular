import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MementoComponent } from './memento/memento.component';

const routes: Routes = [{ path: '', component: MementoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MementoRoutingModule { }
