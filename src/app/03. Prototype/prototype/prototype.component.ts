import { Component, OnInit } from '@angular/core';
import { CarPrototype, Prototype } from '../models/car.model';
import { Engine, PetrolEngine } from '../models/engine.model';

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.scss']
})
export class PrototypeComponent implements OnInit {
  private readonly _cars: Prototype[];
  public get cars(): Prototype[] {
    return this._cars;
  }
  public selectedColor: string;

  constructor() {
    this._cars = new Array<Prototype>();
  }

  ngOnInit(): void {
    const engine: Engine = new PetrolEngine(2000);
    this._cars.push(new CarPrototype('Toyota', 'red', engine));
    this.selectedColor = 'red';
  }

  btnCopyLastCarWithNewColor(): void {
    const newCar: Prototype = this._cars[this._cars.length - 1].clone();
    newCar.color = this.selectedColor;
    this._cars.push(newCar);
  }
}
