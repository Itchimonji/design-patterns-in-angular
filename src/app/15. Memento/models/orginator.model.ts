import {Card, MatCard} from './card.model';
import { ConcreteMemento, Memento } from './memento.model';

export interface Orginator {
  changeTitle(value: string): void;
  changeDescription(value: string): void;
  changeColor(value: string): void;
  saveState(): Memento;
  restoreState(memento: Memento): void;
}

/* responsibility for state handling */
export class ConcreteOrginator implements Orginator {
  private currentState: Card;

  constructor(state: Card) {
    this.currentState = state;
  }

  public changeTitle(value: string): void {
    this.currentState.title = value;
  }

  public changeDescription(value: string): void {
    this.currentState.description = value;
  }

  public changeColor(value: string): void {
    this.currentState.color = value;
  }

  /** create memento **/
  public saveState(): Memento {
    return new ConcreteMemento(new MatCard(this.currentState.title, this.currentState.description, this.currentState.color));
  }

  /** set memento **/
  public restoreState(memento: Memento): void {
    this.currentState = memento.getState();
  }
}
