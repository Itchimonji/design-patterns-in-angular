import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialModule } from '../../modules/angular-material.module';
import { PrototypeComponent } from './prototype.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarPrototype, Prototype } from '../models/car.model';
import { DieselEngine, Engine, PetrolEngine } from '../models/engine.model';

describe('PrototypeComponent', () => {
  let component: PrototypeComponent;
  let fixture: ComponentFixture<PrototypeComponent>;
  let cars: Prototype[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrototypeComponent],
      imports: [AngularMaterialModule, FormsModule, BrowserAnimationsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrototypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    cars = component.cars;
  });

  it('should have an initial car', () => {
    const startCar: Prototype = cars[cars.length - 1];
    expect(startCar.name).toEqual('Toyota');
    expect(startCar.color).toEqual('red');
  });

  it('should have an initial selected color', () => {
    expect(component.selectedColor).toEqual('red');
  });

  it('should have a copied car with blue color', () => {
    component.selectedColor = 'blue';
    component.btnCopyLastCarWithNewColor();
    const lastCar: Prototype = cars[cars.length - 1];
    expect(lastCar.name).toEqual('Toyota');
    expect(lastCar.color).toEqual('blue');
  });

  it('should have a created car', () => {
    const car: Prototype = new CarPrototype('1', 'a', new PetrolEngine(116));
    expect(car.name).toEqual('1');
    expect(car.color).toEqual('a');
  });

  it('should have a petrol engine', () => {
    const engine: Engine = new PetrolEngine(116);
    expect(engine.ccm).toEqual(116);
    expect(engine.fuel).toEqual('petrol');
  });

  it('should have a diesel engine', () => {
    const engine: Engine = new DieselEngine(116);
    expect(engine.ccm).toEqual(116);
    expect(engine.fuel).toEqual('diesel');
  });
});
