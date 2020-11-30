import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./xx. components/Home/home.module').then(m => m.HomeModule)
  },
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
    loadChildren: () => import('./05. Factory Method/factory-method.module').then(m => m.FactoryMethodModule)
  },
  {
    path: 'adapter',
    loadChildren: () => import('./06. Adapter/adapter.module').then(m => m.AdapterModule)
  },
  {
    path: 'facade',
    loadChildren: () => import('./10. Facade/facade.module').then(m => m.FacadeModule)
  },
  {
    path: 'decorator',
    loadChildren: () => import('./09. Decorator/decorator.module').then(m => m.DecoratorModule)
  },
  {
    path: 'proxy',
    loadChildren: () => import('./12. Proxy/proxy.module').then(m => m.ProxyModule)
  },
  {
    path: 'composite',
    loadChildren: () => import('./08. Composite/composite.module').then(m => m.CompositeModule)
  },
  { path: 'bridge', loadChildren: () => import('./07. Bridge/bridge.module').then(m => m.BridgeModule) },
  { path: 'flyweight', loadChildren: () => import('./11. Flyweight/flyweight.module').then(m => m.FlyweightModule) },
  { path: 'mediator', loadChildren: () => import('./13. Mediator/mediator.module').then(m => m.MediatorModule) },
  {
    path: 'iterator',
    loadChildren: () => import('./14. Iterator/iterator.module').then(m => m.IteratorModule)
  },
  {
    path: 'memento',
    loadChildren: () => import('./15. Memento/memento.module').then(m => m.MementoModule)
  },
  {
    path: 'strategy',
    loadChildren: () => import('./16. Strategy/strategy.module').then(m => m.StrategyModule)
  },
  {
    path: 'command',
    loadChildren: () => import('./17. Command/command.module').then(m => m.CommandModule)
  },
  {
    path: 'observer',
    loadChildren: () => import('./18. Observer/observer.module').then(m => m.ObserverModule)
  },
  {
    path: 'visitor',
    loadChildren: () => import('./19. Visitor/visitor.module').then(m => m.VisitorModule)
  },
  {
    path: 'state',
    loadChildren: () => import('./20. State/state.module').then(m => m.StateModule)
  },
  {
    path: 'template-method',
    loadChildren: () => import('./21. Template Method/template-method.module').then(m => m.TemplateMethodModule)
  },
  {
    path: 'chain-of-responsibility',
    loadChildren: () => import('./22. Chain of Responsibility/chain-of-responsibility.module').then(m => m.ChainOfResponsibilityModule)
  },
  { path: 'interpreter', loadChildren: () => import('./23. Interpreter/interpreter.module').then(m => m.InterpreterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
