export interface House {
  walls: number;
  doors: number;
  windows: number;
  garden: boolean;
  pool: boolean;
  floors: number;
  basement: boolean;
}

export class HouseImpl implements House {
  constructor() {
    this.walls = 0;
    this.doors = 0;
    this.windows = 0;
    this.garden = false;
    this.pool = false;
    this.floors = 0;
    this.basement = false;
  }
  public walls: number;
  public doors: number;
  public windows: number;
  public garden: boolean;
  public pool: boolean;
  public floors: number;
  public basement: boolean;
}
