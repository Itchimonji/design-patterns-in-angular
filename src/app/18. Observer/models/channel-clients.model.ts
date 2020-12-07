import {Observer, Subject} from './interfaces';
import {ChannelServer} from './channel-server.model';

export class ChannelA implements Observer {
  private readonly listMessages: string[];

  constructor() {
    this.listMessages = [];
  }

  public get messages(): string[] {
    return [...this.listMessages];
  }
  public update(subject: Subject): void {
    if (!(subject instanceof ChannelServer)) {
      this.listMessages.push('Invalid sender.');
      return;
    }
    if (subject.state < 3) {
      this.listMessages.push('(Received number < 3) => ' + subject.state);
    } else {
      this.listMessages.push('...');
    }
  }
}

export class ChannelB implements Observer {
  private readonly listMessages: string[];

  constructor() {
    this.listMessages = [];
  }

  public get messages(): string[] {
    return [...this.listMessages];
  }

  public update(subject: Subject): void {
    if (!(subject instanceof ChannelServer)) {
      this.listMessages.push('Invalid sender.');
      return;
    }
    if (subject.state > 2) {
      this.listMessages.push('(Received number > 2) => ' + subject.state);
    } else {
      this.listMessages.push('...');
    }
  }
}
