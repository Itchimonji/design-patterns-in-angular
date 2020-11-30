import { Mediator } from './mediator.interface';
import { User } from './user.model';

interface IHash {
  [key: number]: User;
}

export class ChatRoom implements Mediator {
  private userMap: IHash = {};

  public notify(message: string, userId: number): void {
    if (this.userMap[userId] != null) {
      this.userMap[userId].receive(message);
    }
  }

  public addUser(user: User): void {
    this.userMap[user.id] = user;
  }
}
