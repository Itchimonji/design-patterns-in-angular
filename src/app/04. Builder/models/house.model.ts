export interface House {
  walls: number;
  doors: number;
  windows: number;
  garden: boolean;
  pool: boolean;
  floors: number;
  basement: boolean;
}

export class HouseModel implements House {
  public walls: number;
  public doors: number;
  public windows: number;
  public garden: boolean;
  public pool: boolean;
  public floors: number;
  public basement: boolean;
}
