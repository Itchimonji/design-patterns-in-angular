import {Builder} from './builder.model';

export class Director {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildVilla(): void {
    this.builder.createWalls(42);
    this.builder.createBasement();
    this.builder.createDoors(15);
    this.builder.createFloors(7);
    this.builder.createGarden();
    this.builder.createPool();
    this.builder.createWindows(75);
  }

  public buildFamilyHouse(): void {
    this.builder.createWalls(17);
    this.builder.createBasement();
    this.builder.createWindows(32);
    this.builder.createDoors(7);
    this.builder.createFloors(2);
    this.builder.createGarden();
  }
}
