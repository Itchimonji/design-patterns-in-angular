export interface Engine {
  ccm: number;
  fuel: string;
}

export class PetrolEngine implements Engine {
  public fuel = 'petrol';
  public ccm: number;

  constructor(ccm: number) {
    this.ccm = ccm;
  }
}

export class DieselEngine implements Engine {
  public fuel = 'diesel';
  public ccm: number;

  constructor(ccm: number) {
    this.ccm = ccm;
  }
}
