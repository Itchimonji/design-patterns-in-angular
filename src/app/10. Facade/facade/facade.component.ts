import { Component, OnInit } from '@angular/core';
import {CoffeeFacade, Facade} from "../models/facade.model";

@Component({
  selector: 'app-facade',
  templateUrl: './facade.component.html',
  styleUrls: ['./facade.component.scss']
})
export class FacadeComponent implements OnInit {
  public logProduction: string[];
  private facade: Facade;

  constructor() {
    this.facade = new CoffeeFacade();
    this.logProduction = new Array<string>();
  }

  ngOnInit(): void {
  }

  public btnProduceCoffee() {
    const log = this.facade.produce();
    console.log(log);
    this.logProduction.push(log);
  }

}
