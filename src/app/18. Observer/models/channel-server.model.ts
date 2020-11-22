import { Observer, Subject } from './interfaces';

// concrete subject
export class ChannelServer implements Subject {
  public state: number;
  private observers: Observer[] = [];

  public attach(observer: Observer): void {
    if (this.observers.includes(observer)) {
      console.log('Subject: Observer has been attached already.');
    } else {
      this.observers.push(observer);
    }
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('Subject: Nonexistent observer.');
    }

    this.observers.splice(observerIndex, 1);
  }

  public notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public calculateRandomNumber(): void {
    this.state = Math.floor(Math.random() * (10 + 1));
    this.notify();
  }
}
