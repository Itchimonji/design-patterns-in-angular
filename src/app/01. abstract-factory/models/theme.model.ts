import { AbstractFactory } from './factory.model';
import { AbstractStyle } from './style.model';
import { AbstractFont } from './font.model';

export interface AbstractTheme {
  getStyleName(): string;
  getFontName(): string;
}

export class Theme implements AbstractTheme {
  private name: string;
  private style: AbstractStyle;
  private font: AbstractFont;

  constructor(factory: AbstractFactory, name: string) {
    this.name = name;
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
