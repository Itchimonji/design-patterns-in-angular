import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AbstractFactoryComponent} from './abstract-factory/abstract-factory.component';

const routes: Routes = [{ path: '', component: AbstractFactoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbstractFactoryRoutingModule { }
