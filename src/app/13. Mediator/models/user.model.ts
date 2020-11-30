import { Mediator } from './mediator.interface';

export abstract class User {
  private readonly _mediator: Mediator;
  private readonly _id: number;
  private readonly _name: string;

  protected constructor(mediator: Mediator, id: number, name: string) {
    this._mediator = mediator;
    this._name = name;
    this._id = id;
  }

  public abstract send(message: string, toUserId: number): void;
  public abstract receive(message: string, fromUserId: number): void;

  public get mediator(): Mediator {
    return this._mediator;
  }
  public get id(): number {
    return this._id;
  }
  public get name(): string {
    return this._name;
  }
}
