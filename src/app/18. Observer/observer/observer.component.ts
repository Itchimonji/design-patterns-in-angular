import { Component } from '@angular/core';
import { Observer, Subject } from '../models/interfaces';
import { ChannelA, ChannelB } from '../models/channel-clients.model';
import { ChannelServer } from '../models/channel-server.model';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.scss']
})
export class ObserverComponent {

  public get messageChannelA(): string[] {
    return this.channelA.messages;
  }

  public get messageChannelB(): string[] {
    return this.channelB.messages;
  }

  private chatServer: Subject;
  private readonly channelA: Observer;
  private readonly channelB: Observer;

  constructor() {
    this.chatServer = new ChannelServer();
    this.channelA = new ChannelA();
    this.chatServer.attach(this.channelA);
    this.channelB = new ChannelB();
    this.chatServer.attach(this.channelB);
  }

  public btnGenerateRandomNumber(): void {
    this.chatServer.calculateRandomNumber();
  }
}
