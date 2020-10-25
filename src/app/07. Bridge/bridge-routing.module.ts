import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BridgeComponent } from './bridge/bridge.component';

const routes: Routes = [{ path: '', component: BridgeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BridgeRoutingModule { }
