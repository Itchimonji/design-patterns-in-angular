import { getRandomInt } from './random.utils';

export interface AbstractTea {
  getType(): string;
  getId(): number;
  cook(): void;
}

export class BlackTea implements AbstractTea {
  private static instance: AbstractTea;
  private readonly id: number;
  private type = 'Black Tea';

  private constructor() {
    // its important that the constructor is private
    // every time we create a new black tea, the constructor get a new id
    this.id = getRandomInt(100);
  }

  public static getInstance(): AbstractTea {
    return this.instance || (this.instance = new this());
  }

  public static setTestingInstance(instance: AbstractTea): void {
    alert('set test instance');
    this.instance = instance;
  }

  public static resetForTesting(): void {
    alert('reset test instance');
    this.instance = null;
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
  private static instance: AbstractTea;
  private readonly id: number;
  private type = 'Fruit Tea';

  private constructor() {
    // its important that the constructor is private
    // every time we create a new black tea, the constructor get a new id
    this.id = getRandomInt(100);
  }

  public static getInstance(): AbstractTea {
    return this.instance || (this.instance = new this());
  }

  public static setTestingInstance(instance: AbstractTea): void {
    alert('set test instance');
    this.instance = instance;
  }

  public static resetForTesting(): void {
    alert('reset test instance');
    this.instance = null;
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
