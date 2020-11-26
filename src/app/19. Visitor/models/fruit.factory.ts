import { Apple, Banana, Cherry, Orange } from './fruit.model';
import { Fruit } from './fruit.interface';
import { Size } from './size.enum';

export class FruitFactory {
  public getFruits(): Fruit[] {
    const result: Fruit[] = [];
    result.push(new Orange(0, 'Mandarin', 'red', Size.S));
    result.push(new Apple(0, 'Gala', 'red', Size.S));
    result.push(new Cherry(0, 'Rainier', 'red', Size.S));
    result.push(new Apple(0, 'Gala', 'red', Size.XL));
    result.push(new Apple(0, 'Honeycrisp', 'orange', Size.XL));
    result.push(new Orange(0, 'Tangerine', 'orange', Size.S));
    result.push(new Orange(0, 'Mandarin', 'red', Size.L));
    result.push(new Banana(0, 'Lady Finger Banana', 'yellow', Size.L));
    result.push(new Orange(0, 'Mandarin', 'red', Size.S));
    result.push(new Banana(0, 'Lady Finger Banana', 'yellow', Size.XL));
    result.push(new Cherry(0, 'Rainier', 'red', Size.S));
    result.push(new Orange(0, 'Tangerine', 'red', Size.S));
    result.push(new Apple(0, 'Gala', 'orange', Size.M));
    result.push(new Cherry(0, 'Morello', 'depp red', Size.S));
    result.push(new Apple(0, 'Honeycrisp', 'orange', Size.L));
    return result;
  }
}
