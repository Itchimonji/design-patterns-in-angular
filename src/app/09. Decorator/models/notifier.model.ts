export interface INotifier {
  send(message: string): string;
}

export class Notifier implements INotifier {
  public send(message: string): string {
    console.log(message);
    return message;
  }
}
