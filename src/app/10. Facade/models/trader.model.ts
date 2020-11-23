export interface Trader {
  getCoffee(): string;
}

export class CoffeeTrader implements Trader {
  public getCoffee(): string {
    return '[Trader]: get coffee from Brazil.. ';
  }
}
