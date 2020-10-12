import { Component, OnInit } from '@angular/core';
import {CarPrototype} from '../models/car.model';
import {Engine, PetrolEngine} from '../models/engine.model';

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.scss']
})
export class PrototypeComponent implements OnInit {

  public cars: CarPrototype[];
  public selectedColor: string;

  constructor() {
    this.cars = new Array<CarPrototype>();
  }

  ngOnInit(): void {
    const engine: Engine = new PetrolEngine(2000);
    this.cars.push(new CarPrototype('Toyota', 'red', engine));
    this.selectedColor = 'red';
  }

  btnCopyLastCarWithNewColor(): void {
    const newCar: CarPrototype = this.cars[this.cars.length - 1].clone();
    newCar.color = this.selectedColor;
    this.cars.push(newCar);
  }

}
