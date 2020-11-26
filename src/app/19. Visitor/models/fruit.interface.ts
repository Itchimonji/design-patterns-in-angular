import { FruitVisitor } from './fruit.visitor';
import { Size } from './size.enum';

export interface Fruit {
  id: number;
  name: string;
  type: string;
  color: string;
  size: Size;
  accept(visitor: FruitVisitor): void;
}
