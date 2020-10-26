import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlyweightComponent } from './flyweight/flyweight.component';

const routes: Routes = [{ path: '', component: FlyweightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlyweightRoutingModule { }
