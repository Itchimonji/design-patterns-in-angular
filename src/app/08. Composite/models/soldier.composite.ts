import { Soldier } from './soldier.model';

// Composite
export class SoldierComposite extends Soldier {
  protected children: Soldier[] = [];

  constructor(name: string) {
    super(name);
  }

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
    const results: string[] = [];

    results.push('>>>' + this.name + ' arrives <<<');

    for (const child of this.children) {
      results.push(child.salute());
    }

    return results.join(' | \n');
  }
}
