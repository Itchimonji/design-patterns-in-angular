export abstract class Soldier {
  protected parent: Soldier;

  public setParent(parent: Soldier) {
    this.parent = parent;
  }

  public getParent(): Soldier {
    return this.parent;
  }

  public add(soldier: Soldier): void { }

  public remove(soldier: Soldier): void { }

  public isComposite(): boolean {
    return false;
  }

  public abstract salute(): string;
}
