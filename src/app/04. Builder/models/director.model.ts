import { Builder } from './builder.model';

export class Director {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public constructVilla(): void {
    this.builder.buildWalls(42);
    this.builder.buildBasement();
    this.builder.buildDoors(15);
    this.builder.buildFloors(7);
    this.builder.buildGarden();
    this.builder.buildPool();
    this.builder.buildWindows(75);
  }

  public constructFamilyHouse(): void {
    this.builder.buildWalls(17);
    this.builder.buildBasement();
    this.builder.buildWindows(32);
    this.builder.buildDoors(7);
    this.builder.buildFloors(2);
    this.builder.buildGarden();
  }
}
