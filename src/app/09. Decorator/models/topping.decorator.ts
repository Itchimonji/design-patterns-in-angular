import { Pizza } from './pizza.model';

export class ExtraCheeseToppingDecorator implements Pizza {
  protected readonly priceCheese: number = 1.3;
  protected pizza: Pizza;

  constructor(pizzaToDecorate: Pizza) {
    this.pizza = pizzaToDecorate;
  }

  public getPrice(): number {
    return this.pizza.getPrice() + this.priceCheese;
  }

  public getTopping(): string {
    return this.pizza.getTopping() + '.. with extra cheese';
  }
}

export class MushroomToppingDecorator implements Pizza {
  protected readonly priceMushrooms: number = 0.9;
  protected pizza: Pizza;

  constructor(pizzaToDecorate: Pizza) {
    this.pizza = pizzaToDecorate;
  }

  public getPrice(): number {
    return this.pizza.getPrice() + this.priceMushrooms;
  }

  public getTopping(): string {
    return this.pizza.getTopping() + '.. with extra mushrooms';
  }
}

export class JalapenoToppingDecorator implements Pizza {
  protected readonly priceJalapeno: number = 1.5;
  protected pizza: Pizza;

  constructor(pizzaToDecorate: Pizza) {
    this.pizza = pizzaToDecorate;
  }

  public getPrice(): number {
    return this.pizza.getPrice() + this.priceJalapeno;
  }

  public getTopping(): string {
    return this.pizza.getTopping() + '.. with extra jalapeno';
  }

  public extraHot(): number {
    return 0.8;
  }
}
