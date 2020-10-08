import * as styles from './style.model';
import * as fonts from './font.model';

export interface AbstractFactory {
  createStyle(): styles.AbstractStyle;
  createFont(): fonts.AbstractFont;
}

export class DarkThemeFactory implements AbstractFactory {
  public createStyle(): styles.AbstractStyle {
    return new styles.DarkThemeStyle();
  }

  public createFont(): fonts.AbstractFont {
    return new fonts.DarkThemeFont();
  }
}

export class LightThemeFactory implements AbstractFactory {
  public createStyle(): styles.AbstractStyle {
    return new styles.LightThemeStyle();
  }

  public createFont(): fonts.AbstractFont {
    return new fonts.LightThemeFont();
  }
}

export class PersonalThemeFactory implements AbstractFactory {
  public createStyle(): styles.AbstractStyle {
    return new styles.PersonalThemeStyle();
  }

  public createFont(): fonts.AbstractFont {
    return new fonts.PersonalThemeFont();
  }
}
