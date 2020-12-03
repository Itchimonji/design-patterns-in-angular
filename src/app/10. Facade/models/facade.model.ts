import { CoffeeTrader, Trader } from "./trader.model";
import { CoffeeMill, Mill } from "./mill.model";
import { Coffee, Drink } from "./drink.model";

export interface Facade {
  produce(): string;
}

export class CoffeeFacade implements Facade {
  protected trader: Trader;
  protected mill: Mill;
  protected drink: Drink;

  constructor(trader: Trader = null,
              mill: Mill = null,
              drink: Drink = null) {
    this.trader = trader || new CoffeeTrader();
    this.mill = mill || new CoffeeMill();
    this.drink = drink || new Coffee();
  }

  public produce(): string {
    let result = '[Facade]: We need to produce coffee!! ';
    result += this.trader.getCoffee();
    result += this.mill.grindCoffee();
    result += this.drink.cook();
    return result;
  }
}
