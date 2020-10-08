import { AbstractFactory } from './factory.model';
import { AbstractStyle } from './style.model';
import { AbstractFont } from './font.model';

export interface IClient {
  getStyleName(): string;
  getFontName(): string;
}

export class Client implements IClient {
  private style: AbstractStyle;
  private font: AbstractFont;

  constructor(factory: AbstractFactory) {
    this.style = factory.createStyle();
    this.font = factory.createFont();
  }

  public getStyleName(): string {
    return this.style.getStyleName();
  }

  public getFontName(): string {
    return this.font.getFontName();
  }
}
