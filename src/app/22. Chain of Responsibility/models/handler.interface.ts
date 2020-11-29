export interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: number): string;
}
