import { getRandomInt } from './random.utils';

export interface AbstractTea {
  getType(): string;
  getId(): number;
  cook(): void;
}

export class BlackTea implements AbstractTea {
  private static instance: BlackTea;
  private id: number;
  private type = 'Black Tea';

  private constructor() {
    // its important that the constructor is private
    // every time we create a new black tea, the constructor get a new id
    this.id = getRandomInt(100);
  }

  public static getInstance(): BlackTea {
    return this.instance || (this.instance = new this());
  }

  public getType(): string {
    return this.type;
  }

  public getId(): number {
    return this.id;
  }

  public cook(): string {
    return this.type + ' is cooking.';
  }
}

export class FruitTea implements AbstractTea {
  private static instance: FruitTea;
  private id: number;
  private type = 'Fruit Tea';

  private constructor() {
    // its important that the constructor is private
    // every time we create a new black tea, the constructor get a new id
    this.id = getRandomInt(100);
  }

  public static getInstance(): FruitTea {
    return this.instance || (this.instance = new this());
  }

  public getType(): string {
    return this.type;
  }

  public getId(): number {
    return this.id;
  }

  public cook(): string {
    return this.type + ' is cooking.';
  }
}
