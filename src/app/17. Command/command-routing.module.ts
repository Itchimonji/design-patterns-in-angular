import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandComponent } from './command/command.component';

const routes: Routes = [{ path: '', component: CommandComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandRoutingModule { }
