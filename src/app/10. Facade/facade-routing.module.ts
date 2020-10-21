import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacadeComponent } from './facade/facade.component';

const routes: Routes = [{ path: '', component: FacadeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacadeRoutingModule { }
