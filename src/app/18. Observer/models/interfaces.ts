export interface Observer {
  messages: string[];
  update(subject: Subject): void;
}

export interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
  calculateRandomNumber(): void;
}
