import { Component, OnInit } from '@angular/core';
import {HouseBuilder} from '../models/builder.model';
import {Director} from '../models/director.model';
import {House} from '../models/house.model';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

  public houses: House[];

  constructor() {
    this.houses = new Array<House>();
  }

  ngOnInit(): void {
    const builder = new HouseBuilder();
    const director = new Director();
    director.setBuilder(builder);

    director.constructFamilyHouse();
    const familyHouse = builder.getResult();
    this.houses.push(familyHouse);

    director.constructVilla();
    const villa = builder.getResult();
    this.houses.push(villa);
  }

}
