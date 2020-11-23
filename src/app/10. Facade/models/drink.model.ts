export interface Drink {
  cook(): string;
}

export class Coffee implements Drink {
  public cook(): string {
    return '[Drink]: cook coffee...';
  }
}
