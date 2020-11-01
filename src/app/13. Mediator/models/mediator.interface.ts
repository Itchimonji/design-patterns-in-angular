import { event } from './event.enum';

export interface Mediator {
  notify(sender: object, event: event): void;
}
