
import { User } from './user.model';

export interface Mediator {
  notify(message: string, userId: number): void;
  addUser(user: User): void;
}
