import {Observer, Subject} from './interfaces';
import {ChannelServer} from './channel-server.model';

export class ChannelA implements Observer {
  private readonly _messages: string[];

  constructor() {
    this._messages = [];
  }

  public get messages(): string[] {
    return [...this._messages];

  }
  public update(subject: Subject): void {
    if (!(subject instanceof ChannelServer)) {
      this._messages.push('Invalid sender.');
      return;
    }
    if (subject.state < 3) {
      this._messages.push('(Received number < 3) => ' + subject.state);
    } else {
      this._messages.push('...');
    }
  }
}

export class ChannelB implements Observer {
  private readonly _messages: string[];

  constructor() {
    this._messages = [];
  }

  public get messages(): string[] {
    return [...this._messages];

  }
  public update(subject: Subject): void {
    if (!(subject instanceof ChannelServer)) {
      this._messages.push('Invalid sender.');
      return;
    }
    if (subject.state > 2) {
      this._messages.push('(Received number > 2) => ' + subject.state);
    } else {
      this._messages.push('...');
    }
  }
}
