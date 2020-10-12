import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrototypeComponent } from './prototype/prototype.component';

const routes: Routes = [{ path: '', component: PrototypeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrototypeRoutingModule { }
