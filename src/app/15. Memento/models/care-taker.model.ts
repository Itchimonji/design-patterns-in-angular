import {Memento} from './memento.model';
import {Orginator} from './orginator.model';

export interface CareTaker {
  backUp(): void;
  undo(): void;
  history(): Memento[];
}

export class ConcreteCareTaker implements CareTaker {
  private listMemento: Memento[] = [];
  private orginator: Orginator;

  constructor(orginator: Orginator) {
    this.orginator = orginator;
  }

  public backUp(): void {
    this.listMemento.push(this.orginator.saveState());
  }

  public undo(): void {
    if (!this.listMemento.length) {
      return;
    }

    const memento: Memento = this.listMemento.pop();
    this.orginator.restoreState(memento);
  }

  public history(): Memento[] {
    console.log(this.listMemento);
    return this.listMemento;
  }
}
