import { Food, Pizza, Tacko, Wrap } from './food.model';

export abstract class Creator {
  public abstract factoryMethodForFood(): Food;

  public produceAndEat(): string {
    const food = this.factoryMethodForFood();
    const produce: string = food.produce();
    const eat: string = food.eat();
    return `${produce} and ${eat}`;
  }
}

export class PizzaCreator extends Creator {
  public factoryMethodForFood(): Food {
    return new Pizza();
  }
}

export class WrapCreator extends Creator {
  public factoryMethodForFood(): Food {
    return new Wrap();
  }
}

export class TackoCreator extends Creator {
  public factoryMethodForFood(): Food {
    return new Tacko();
  }
}
