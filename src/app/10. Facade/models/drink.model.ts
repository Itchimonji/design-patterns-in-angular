export interface Drink {
  cook(): string;
}

export class Coffee implements Coffee {
  public cook(): string {
    return 'cook coffee...';
  }
}
