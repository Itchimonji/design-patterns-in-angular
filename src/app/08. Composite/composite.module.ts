import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompositeRoutingModule } from './composite-routing.module';
import { CompositeComponent } from './composite/composite.component';
import {AngularMaterialModule} from '../modules/angular-material.module';

@NgModule({
  declarations: [CompositeComponent],
    imports: [
        CommonModule,
        CompositeRoutingModule,
        AngularMaterialModule
    ]
})
export class CompositeModule { }
