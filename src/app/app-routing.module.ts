import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'abstract-factory',
    loadChildren: () => import('./01. abstract-factory/abstract-factory.module').then(m => m.AbstractFactoryModule)
  },
  {
    path: 'singleton',
    loadChildren: () => import('./02. Singleton/singleton.module').then(m => m.SingletonModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
