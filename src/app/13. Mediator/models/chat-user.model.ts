import { User } from './user.model';
import { Mediator } from './mediator.interface';

export class ChatUser extends User {

  constructor(mediator: Mediator, userId: number, name: string) {
    super(mediator, userId, name);
  }

  public send(message: string, userId: number): void {
    this.mediator.notify(message, userId);
  }

  public receive(message: string): void {
  }

}
