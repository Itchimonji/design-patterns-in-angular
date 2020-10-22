import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProxyRoutingModule } from './proxy-routing.module';
import { ProxyComponent } from './proxy/proxy.component';
import { AngularMaterialModule } from '../modules/angular-material.module';

@NgModule({
  declarations: [ProxyComponent],
  imports: [CommonModule, ProxyRoutingModule, AngularMaterialModule]
})
export class ProxyModule {}
