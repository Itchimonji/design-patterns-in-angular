import { Fruit } from './fruit.interface';

// Visitor
export interface FruitVisitor {
  Oranges: Fruit[];
  Apples: Fruit[];
  Bananas: Fruit[];
  Cherries: Fruit[];
  visitOrange(fruit: Fruit): void;
  visitApple(fruit: Fruit): void;
  visitBanana(fruit: Fruit): void;
  visitCherry(fruit: Fruit): void;
}

// Concrete visitor
export class FruitPartitioner implements FruitVisitor {
  private listOrange: Fruit[] = [];
  private listApple: Fruit[] = [];
  private listBanana: Fruit[] = [];
  private listCherry: Fruit[] = [];

  public visitOrange(fruit: Fruit): void {
    this.listOrange.push(fruit);
  }

  public visitApple(fruit: Fruit): void {
    this.listApple.push(fruit);
  }

  public visitBanana(fruit: Fruit): void {
    this.listBanana.push(fruit);
  }

  public visitCherry(fruit: Fruit): void {
    this.listCherry.push(fruit);
  }

  public get Oranges(): Fruit[] {
    return this.listOrange;
  }

  public get Apples(): Fruit[] {
    return this.listApple;
  }

  public get Bananas(): Fruit[] {
    return this.listBanana;
  }

  public get Cherries(): Fruit[] {
    return this.listCherry;
  }
}
