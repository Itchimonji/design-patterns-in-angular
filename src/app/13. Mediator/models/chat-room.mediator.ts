import { Mediator } from './mediator.interface';
import { User } from './user.model';

interface IHash {
  [key: number]: User;
}

export class ChatRoom implements Mediator {
  private userMap: IHash = {};

  public getUserNameByID(id: number): string {
    return this.userMap[id].name;
  }

  public getUserByID(id: number): User {
    return this.userMap[id];
  }

  public notify(message: string, toUserId: number, fromUserId: number): void {
    if (this.userMap[toUserId] != null) {
      this.userMap[toUserId].receive(message, fromUserId);
    }
  }

  public addUser(user: User): void {
    this.userMap[user.id] = user;
  }
}
