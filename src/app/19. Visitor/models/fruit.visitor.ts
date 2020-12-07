import { Fruit } from './fruit.interface';

// Visitor
export interface FruitVisitor {
  oranges: Fruit[];
  apples: Fruit[];
  bananas: Fruit[];
  cherries: Fruit[];
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

  public get oranges(): Fruit[] {
    return this.listOrange;
  }

  public get apples(): Fruit[] {
    return this.listApple;
  }

  public get bananas(): Fruit[] {
    return this.listBanana;
  }

  public get cherries(): Fruit[] {
    return this.listCherry;
  }
}
