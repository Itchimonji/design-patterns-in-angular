// Component
export abstract class Soldier {
  protected parent: Soldier;
  protected name: string;

  protected constructor(name: string) {
    this.name = name;
  }

  public setParent(parent: Soldier): void {
    this.parent = parent;
  }

  public getParent(): Soldier {
    return this.parent;
  }

  public add(soldier: Soldier): void {
    // beneficial to define the child-management operations
  }

  public remove(soldier: Soldier): void {
    // beneficial to define the child-management operations
  }

  public isComposite(): boolean {
    return false;
  }

  public abstract salute(): string;
}
