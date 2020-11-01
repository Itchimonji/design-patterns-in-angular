import { Mediator } from './mediator.interface';

export class Passerby {
  protected mediator: Mediator;
  readonly log: string[];

  constructor(mediator: Mediator = null) {
    this.mediator = mediator;
    this.log = [];
  }

  protected addLog(value: string) {
    this.log.push(value);
  }

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  public getLog(): string[] {
    return this.log;
  }

  public inform() {
    this.addLog('Taxi arrived at Passerby');
  }
}
