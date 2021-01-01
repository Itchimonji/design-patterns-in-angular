import { Component, OnInit } from '@angular/core';
import { AbstractTea, BlackTea, FruitTea } from '../models/tea.model';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.scss']
})
export class SingletonComponent {
  private _blackTea: AbstractTea;
  public get blackTea(): AbstractTea {
    return this._blackTea;
  }
  private _fruitTea: AbstractTea;
  public get fruitTea(): AbstractTea {
    return this._fruitTea;
  }

  constructor() {
    this._blackTea = BlackTea.getInstance();
    this._fruitTea = FruitTea.getInstance();
  }

  public btnGetNewBlackTeaInstance(): void {
    // id stays the same, because we don't create a new object
    this._blackTea = BlackTea.getInstance();
  }

  public btnGetNewFruitTeaInstance(): void {
    // id stays the same, because we don't create a new object
    this._fruitTea = FruitTea.getInstance();
  }
}
