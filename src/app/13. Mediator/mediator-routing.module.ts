import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediatorComponent } from './mediator/mediator.component';

const routes: Routes = [{ path: '', component: MediatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediatorRoutingModule { }
