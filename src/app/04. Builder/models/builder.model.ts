import { House, HouseImpl } from './house.model';

export interface Builder {
  buildWalls(count: number): void;
  buildDoors(count: number): void;
  buildWindows(count: number): void;
  buildGarden(): void;
  buildPool(): void;
  buildFloors(count: number): void;
  buildBasement(): void;
  getResult(): House;
}

export class HouseBuilder implements Builder {
  private house: House;

  constructor() {
    this.reset();
  }

  private reset(): void {
    this.house = new HouseImpl();
  }

  // e.g. buildPartA
  public buildWalls(count: number): void {
    this.house.walls = count;
  }

  // e.g. buildPartB
  public buildDoors(count: number): void {
    this.house.doors = count;
  }

  // e.g. buildPartC
  public buildWindows(count: number): void {
    this.house.windows = count;
  }

  public buildGarden(): void {
    this.house.garden = true;
  }

  public buildPool(): void {
    this.house.pool = true;
  }

  public buildFloors(count: number): void {
    this.house.floors = count;
  }

  public buildBasement(): void {
    this.house.basement = true;
  }

  public getResult(): House {
    const result = this.house;
    this.reset();
    return result;
  }
}
