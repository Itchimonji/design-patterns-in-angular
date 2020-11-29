import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChainOfResponsibilityComponent } from './chain-of-responsibility/chain-of-responsibility.component';

const routes: Routes = [{ path: '', component: ChainOfResponsibilityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChainOfResponsibilityRoutingModule { }
