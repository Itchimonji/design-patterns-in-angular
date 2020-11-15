import { Card } from './card.model';

export interface Memento {
  getState(): Card;
  getDate(): string;
}

export class ConcreteMemento implements Memento {
  private readonly state: Card;
  private readonly date: string;

  constructor(state: Card) {
    this.state = state;
    this.date = new Date(Date.now()).toString();
  }

  /* restoring the state */
  public getState(): Card {
    return this.state;
  }

  public getDate(): string {
    return this.date;
  }
}
