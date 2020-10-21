import {INotifier} from "./notifier.model";

export class EmailNotifier implements INotifier {
  protected notifier: INotifier;

  constructor(notifier: INotifier) {
    this.notifier = notifier;
  }
  public send(message: string): string {
    return this.notifier.send(message);
  }
}
