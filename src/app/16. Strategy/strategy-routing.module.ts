import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrategyComponent } from './strategy/strategy.component';

const routes: Routes = [{ path: '', component: StrategyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StrategyRoutingModule { }
