/*
* Resource: https://refactoring.guru/design-patterns/composite/typescript/example
*/
import { Soldier } from './soldier.model';

class SoldierComposite extends Soldier {
  protected children: Soldier[] = [];

  public add(component: Soldier): void {
    this.children.push(component);
    component.setParent(this);
  }

  public remove(component: Soldier): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);
    component.setParent(null);
  }

  public isComposite(): boolean {
    return true;
  }

  public salute(): string {
    const results = [];
    for (const child of this.children) {
      results.push(child.salute());
    }

    return `OrderTo(${results.join('+')})`;
  }
}
