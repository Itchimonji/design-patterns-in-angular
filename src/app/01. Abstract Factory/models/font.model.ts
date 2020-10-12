export interface AbstractFont {
  getFontName(): string;
}

export class DarkThemeFont implements AbstractFont {
  public getFontName(): string {
    return 'Arial Black';
  }
}

export class LightThemeFont implements AbstractFont {
  public getFontName(): string {
    return 'Comic Sans MS';
  }
}

export class PersonalThemeFont implements AbstractFont {
  public getFontName(): string {
    return 'Times New Roman';
  }
}
