import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'abstract-factory',
    loadChildren: () => import('./01. Abstract Factory/abstract-factory.module').then(m => m.AbstractFactoryModule)
  },
  {
    path: 'singleton',
    loadChildren: () => import('./02. Singleton/singleton.module').then(m => m.SingletonModule)
  },
  {
    path: 'prototype',
    loadChildren: () => import('./03. Prototype/prototype.module').then(m => m.PrototypeModule)
  },
  {
    path: 'builder',
    loadChildren: () => import('./04. Builder/builder.module').then(m => m.BuilderModule)
  },
  {
    path: 'factory-method',
    loadChildren: () => import('./05. Factory Method/factory-method.module').then(m => m.FactoryMethodModule) },
  {
    path: 'adapter',
    loadChildren: () => import('./06. Adapter/adapter.module').then(m => m.AdapterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
