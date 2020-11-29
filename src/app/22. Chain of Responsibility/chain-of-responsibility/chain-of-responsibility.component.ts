import { Component, OnInit } from '@angular/core';
import { FiftyHandler, FiveHandler, HundredHandler, OneHandler, TenHandler, ThreeHandler, TwentyHandler } from '../models/handler.model';

@Component({
  selector: 'app-chain-of-responsibility',
  templateUrl: './chain-of-responsibility.component.html',
  styleUrls: ['./chain-of-responsibility.component.scss']
})
export class ChainOfResponsibilityComponent {

  // inspired by https://refactoring.guru/design-patterns/chain-of-responsibility/typescript/example

  public randomNumber: number;
  public result: string;

  private hundredHandler: HundredHandler;
  private fiftyHandler: FiftyHandler;
  private twentyHandler: TwentyHandler;
  private tenHandler: TenHandler;
  private fiveHandler: FiveHandler;
  private threeHandler: ThreeHandler;
  private oneHandler: OneHandler;

  constructor() {
    this.randomNumber = 0;
    this.result = '';
    this.handlerFactory();
  }

  public btnCheckRandomNumber(): void {
    this.result = this.handleRandomNumber();
  }

  private handleRandomNumber(): string {
    this.randomNumber = +(Math.random() * 110).toFixed(2);
    return this.hundredHandler.handle(this.randomNumber);
  }

  private handlerFactory(): void {
    this.hundredHandler = new HundredHandler();
    this.fiftyHandler = new FiftyHandler();
    this.twentyHandler = new TwentyHandler();
    this.tenHandler = new TenHandler();
    this.fiveHandler = new FiveHandler();
    this.threeHandler = new ThreeHandler();
    this.oneHandler = new OneHandler();
    this.hundredHandler
      .setNext(this.fiftyHandler)
      .setNext(this.twentyHandler)
      .setNext(this.tenHandler)
      .setNext(this.fiveHandler)
      .setNext(this.threeHandler)
      .setNext(this.oneHandler);
  }
}
