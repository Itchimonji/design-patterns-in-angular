import { Mediator } from './mediator.interface';
import { event } from './event.enum';
import { Taxi1, Taxi2 } from './taxi.model';
import { Passerby } from './passerby.model';

class RadioTaxiCallCenter implements Mediator {
  private taxi1: Taxi1;
  private taxi2: Taxi2;
  private passerby1: Passerby;
  public log: string[] = [];

  constructor(taxi1: Taxi1, taxi2: Taxi2, passerby: Passerby) {
    this.taxi1 = taxi1;
    this.taxi1.setMediator(this);
    this.taxi2 = taxi2;
    this.taxi2.setMediator(this);
    this.passerby1 = passerby;
  }

  public notify(sender: object, value: event): void {
    if (value === event.callATaxi) {
      this.log.push('RadioTaxiCallCenter reacts on taxi call and triggers all taxis.');
      this.taxi1.informAboutPasserby();
      this.taxi2.informAboutPasserby();
    } else if (value === event.isInformedToTakePasserBby) {
      this.log.push(sender.toString() + ' is informed.');
    } else if (value === event.taxiIsTakingABreak) {
      this.log.push('No information about future passerby for ' + sender.toString());
    } else if (value === event.taxiArrived) {
      this.log.push(sender.toString() + ' arrived at passerby');
      this.passerby1.inform();
    }
  }
}
