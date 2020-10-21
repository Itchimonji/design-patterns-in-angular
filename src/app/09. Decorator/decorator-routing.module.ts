import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecoratorComponent } from './decorator/decorator.component';

const routes: Routes = [{ path: '', component: DecoratorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecoratorRoutingModule { }
