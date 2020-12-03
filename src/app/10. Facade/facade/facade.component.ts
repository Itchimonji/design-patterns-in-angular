import { Component } from '@angular/core';
import { CoffeeFacade, Facade } from "../models/facade.model";

@Component({
  selector: 'app-facade',
  templateUrl: './facade.component.html',
  styleUrls: ['./facade.component.scss']
})
export class FacadeComponent {
  public logProduction: string[];
  private facade: Facade;

  constructor() {
    this.facade = new CoffeeFacade();
    this.logProduction = new Array<string>();
  }

  public btnProduceCoffee(): void {
    const log = this.facade.produce();
    console.log(log);
    this.logProduction.push(log);
  }
}
