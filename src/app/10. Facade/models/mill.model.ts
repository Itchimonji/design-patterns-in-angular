export interface Mill {
  grindCoffee(): string;
}

export class CoffeeMill implements Mill {
  public grindCoffee(): string {
    return '[Mill]: grind coffee... ';
  }
}
