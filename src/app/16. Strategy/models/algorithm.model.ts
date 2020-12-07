import { Strategy } from './strategy.model';

export class Algorithm {
  private _strategy: Strategy;
  private arr: number[] = [54, 2, 89, 12, 24, 68, 34, 77, 31, 40, 92];

  constructor(strategy: Strategy) {
    this._strategy = strategy;
  }

  public set strategy(strategy: Strategy) {
    this._strategy = strategy;
  }

  public get array(): string {
    return this.arr.join(',');
  }

  public sort(): string {
    const result: number[] = this._strategy.sort([...this.arr]);
    return result.join(',');
  }
}
