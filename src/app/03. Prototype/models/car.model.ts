import {Engine} from './engine.model';

export class CarPrototype {
  public name: string;
  public color: string;
  private engine: Engine;

  constructor(name: string, color: string, engine: Engine) {
    this.name = name;
    this.color = color;
    this.engine = engine;
  }

  public getEngine(): Engine {
    return this.engine;
  }

  public clone(): CarPrototype {
    // https://stackoverflow.com/a/53442750/14427814
    return Object.assign(Object.create(this), this);
  }
}
