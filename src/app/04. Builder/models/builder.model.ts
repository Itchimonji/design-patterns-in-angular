import {House, HouseModel } from './house.model';

export interface Builder {
  createWalls(count: number): void;
  createDoors(count: number): void;
  createWindows(count: number): void;
  createGarden(): void;
  createPool(): void;
  createFloors(count: number): void;
  createBasement(): void;
}

export class HouseBuilder implements Builder {
  private house: House;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.house = new HouseModel();
  }

  public createWalls(count: number): void {
    this.house.walls = count;
  }

  public createDoors(count: number): void {
    this.house.doors = count;
  }

  public createWindows(count: number): void {
    this.house.windows = count;
  }

  public createGarden(): void {
    this.house.garden = true;
  }

  public createPool(): void {
    this.house.pool = true;
  }

  public createFloors(count: number): void {
    this.house.floors = count;
  }

  public createBasement(): void {
    this.house.basement = true;
  }

  public get(): House {
    const result = this.house;
    this.reset();
    return result;
  }
}
