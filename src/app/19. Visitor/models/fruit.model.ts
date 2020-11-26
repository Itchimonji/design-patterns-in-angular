import { Size } from './size.enum';
import { Fruit } from './fruit.interface';
import { FruitVisitor } from './fruit.visitor';

export class ConcreteFruit implements Fruit {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _color: string;
  private readonly _size: Size;
  protected _type: string;

  constructor(id: number, name: string, color: string, size: Size) {
    this._id = id;
    this._name = name;
    this._color = color;
    this._size = size;
  }

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get color(): string {
    return this._color;
  }

  public get size(): Size {
    return this._size;
  }

  public get type(): string {
    return this._type;
  }

  accept(visitor: FruitVisitor): void {}
}

export class Orange extends ConcreteFruit implements Fruit {
  constructor(id: number, name: string, color: string, size: Size) {
    super(id, name, color, size);
    this._type = 'Orange';
  }

  public accept(visitor: FruitVisitor): void {
    visitor.visitOrange(this);
  }
}

export class Apple extends ConcreteFruit implements Fruit {
  constructor(id: number, name: string, color: string, size: Size) {
    super(id, name, color, size);
    this._type = 'Apple';
  }

  public accept(visitor: FruitVisitor): void {
    visitor.visitApple(this);
  }
}

export class Banana extends ConcreteFruit implements Fruit {
  constructor(id: number, name: string, color: string, size: Size) {
    super(id, name, color, size);
    this._type = 'Banana';
  }

  public accept(visitor: FruitVisitor): void {
    visitor.visitBanana(this);
  }
}

export class Cherry extends ConcreteFruit implements Fruit {
  constructor(id: number, name: string, color: string, size: Size) {
    super(id, name, color, size);
    this._type = 'Cherry';
  }

  public accept(visitor: FruitVisitor): void {
    visitor.visitCherry(this);
  }
}
