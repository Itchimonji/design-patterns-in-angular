import { Toy } from './toy.model';
import { Cat } from './cat.model';

export class CatAdapter implements Toy {
  private cat: Cat;

  constructor(cat: Cat) {
    this.cat = cat;
  }

  public squeak(): string {
    return this.cat.makeSound();
  }
}
