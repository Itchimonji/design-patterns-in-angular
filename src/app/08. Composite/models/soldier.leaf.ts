import { Soldier } from './soldier.model';

// Leaf
export class SoldierLeaf extends Soldier {
  constructor(name: string) {
    super(name);
  }
  public salute(): string {
    return this.name + ' salutes..!';
  }
}
