import { User } from './user.model';
import { Mediator } from './mediator.interface';

export class ChatUser extends User {
  private readonly listReceivedMessages: string[] = [];

  constructor(mediator: Mediator, userId: number, name: string) {
    super(mediator, userId, name);
  }

  public get receivedMessages(): string[] {
    return this.listReceivedMessages;
  }

  public send(message: string, toUserId: number): void {
    this.mediator.notify(message, toUserId, this.id);
  }

  public receive(message: string, fromUserId: number): void {
    this.listReceivedMessages.push(this.mediator.getUserNameByID(fromUserId) + ': ' + message);
  }
}
