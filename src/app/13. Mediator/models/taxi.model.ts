import { Mediator } from './mediator.interface';
import { event } from './event.enum';

export class Taxi {
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
}

export class Taxi1 extends Taxi {
  public informAboutPasserby() {
    this.addLog('Taxi 1 is informed to take Passerby');
    this.mediator.notify(this, event.isInformedToTakePasserBby);
  }

  public arrived() {
    this.addLog('Taxi 1 arrived');
    this.mediator.notify(this, event.taxiArrived);
  }
}

export class Taxi2 extends Taxi {
  public takeABreak() {
    this.addLog('Taxi 2 is taking a break.');
    this.mediator.notify(this, event.taxiIsTakingABreak);
  }

  public informAboutPasserby() {
    this.addLog('Taxi 2 is informed to take Passerby');
    this.mediator.notify(this, event.isInformedToTakePasserBby);
  }
}
