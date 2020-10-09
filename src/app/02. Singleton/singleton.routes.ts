import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingletonComponent } from './singleton/singleton.component';

const routes: Routes = [{ path: '', component: SingletonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingletonRoutingModule { }
