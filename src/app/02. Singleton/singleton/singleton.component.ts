import { Component, OnInit } from '@angular/core';
import { AbstractTea, BlackTea, FruitTea } from '../models/tea.model';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.scss']
})
export class SingletonComponent {
  public blackTea: AbstractTea;
  public fruitTea: AbstractTea;

  constructor() {
    this.blackTea = BlackTea.getInstance();
    this.fruitTea = FruitTea.getInstance();
  }

  public btnGetNewBlackTeaInstance(): void {
    // id stays the same, because we don't create a new object
    this.blackTea = BlackTea.getInstance();
  }

  public btnGetNewFruitTeaInstance(): void {
    // id stays the same, because we don't create a new object
    this.fruitTea = FruitTea.getInstance();
  }
}
