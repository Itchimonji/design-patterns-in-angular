/*
* Resource: https://refactoring.guru/design-patterns/composite/typescript/example
*/
import { Soldier } from './soldier.model';

class SoldierLeaf extends Soldier {
  public salute(): string {
    return 'Salute!';
  }
}
