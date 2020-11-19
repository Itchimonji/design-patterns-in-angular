import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObserverComponent } from './observer/observer.component';

const routes: Routes = [{ path: '', component: ObserverComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObserverRoutingModule { }
