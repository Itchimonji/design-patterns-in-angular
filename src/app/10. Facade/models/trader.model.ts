export interface Trader {
  getCoffee(): string;
}

export class CoffeeTrader implements Trader {
  public getCoffee() {
    return 'get coffee from Brazil..';
  }
}
