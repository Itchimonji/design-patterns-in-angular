import { ExtraCheeseToppingDecorator, JalapenoToppingDecorator } from './topping.decorator';
import { Pizza } from './pizza.model';

export class ExtraExtraCheeseToppingDecorator extends ExtraCheeseToppingDecorator implements Pizza {
  constructor(pizzaToDecorate: Pizza) {
    super(pizzaToDecorate);
  }

  public getPrice(): number {
    return super.getPrice() + 0.5;
  }

  public getTopping(): string {
    return super.getTopping() + ' & with moooore extra cheese';
  }
}

export class HotJalapenoToppingDecorator extends JalapenoToppingDecorator implements Pizza {
  constructor(pizzaToDecorate: Pizza) {
    super(pizzaToDecorate);
  }

  public getPrice(): number {
    return super.getPrice() + 0.7;
  }

  public getTopping(): string {
    return super.getTopping() + ' & with extra hot hot jalapeno';
  }
}
