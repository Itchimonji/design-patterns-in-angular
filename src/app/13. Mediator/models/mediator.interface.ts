import { User } from './user.model';

export interface Mediator {
  notify(message: string, toUserId: number, fromUserId: number): void;
  addUser(user: User): void;
  getUserNameByID(id: number): string;
  getUserByID(id: number): User;
}
