export interface Trader {
  getCoffee(): string;
}

export class CoffeeTrader implements Trader {
  public getCoffee(): string {
    return 'get coffee from Brazil..';
  }
}
