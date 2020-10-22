// inspired by https://stackoverflow.com/a/2707425

export interface Pizza {
  getPrice(): number;
  getTopping(): string;
}

class BasePizza implements Pizza {
  protected price: number;
  protected topping: string;

  public getPrice(): number {
    return this.price;
  }

  public getTopping(): string {
    return this.topping;
  }
}

export class Margherita extends BasePizza implements Pizza {
  constructor() {
    super();
    this.price = 5.95;
    this.topping = 'Pizza Margherita';
  }
}

export class Detroit extends BasePizza implements Pizza {
  constructor() {
    super();
    this.price = 7.99;
    this.topping = 'Pizza Detroit';
  }
}

export class Fugazzeta extends BasePizza implements Pizza {
  constructor() {
    super();
    this.price = 6.89;
    this.topping = 'Pizza Fugazzeta';
  }
}
