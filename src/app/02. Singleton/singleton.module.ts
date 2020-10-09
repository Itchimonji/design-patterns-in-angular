import {NgModule} from '@angular/core';
import {SingletonComponent} from './singleton/singleton.component';
import {SingletonRoutingModule} from './singleton.routes';
import {AngularMaterialModule} from "../modules/angular-material.module";

@NgModule({
  declarations : [
    SingletonComponent
  ],
    imports: [
        SingletonRoutingModule,
        AngularMaterialModule
    ]
})
export class SingletonModule { }
