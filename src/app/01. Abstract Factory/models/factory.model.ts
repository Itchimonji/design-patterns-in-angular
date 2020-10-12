import { AbstractStyle, DarkThemeStyle, LightThemeStyle, PersonalThemeStyle } from './style.model';
import { AbstractFont, DarkThemeFont, LightThemeFont, PersonalThemeFont } from './font.model';

export interface AbstractFactory {
  createStyle(): AbstractStyle;
  createFont(): AbstractFont;
}

export class DarkThemeFactory implements AbstractFactory {
  public createStyle(): AbstractStyle {
    return new DarkThemeStyle();
  }

  public createFont(): AbstractFont {
    return new DarkThemeFont();
  }
}

export class LightThemeFactory implements AbstractFactory {
  public createStyle(): AbstractStyle {
    return new LightThemeStyle();
  }

  public createFont(): AbstractFont {
    return new LightThemeFont();
  }
}

export class PersonalThemeFactory implements AbstractFactory {
  public createStyle(): AbstractStyle {
    return new PersonalThemeStyle();
  }

  public createFont(): AbstractFont {
    return new PersonalThemeFont();
  }
}
