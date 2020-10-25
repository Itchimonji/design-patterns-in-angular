/*
* Resource: https://refactoring.guru/design-patterns/composite/typescript/example
* Usually, it's the Leaf objects that do the actual work, whereas Composite
* objects only delegate to their sub-components.
*/
import { Soldier } from './soldier.model';

class SoldierLeaf extends Soldier {
  public salute(): string {
    return 'Salute!';
  }
}
