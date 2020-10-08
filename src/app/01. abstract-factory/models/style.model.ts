export interface AbstractStyle {
  getStyleName(): string;
}

export class DarkThemeStyle implements AbstractStyle {
  public getStyleName(): string {
    return 'dark';
  }
}

export class LightThemeStyle implements AbstractStyle {
  public getStyleName(): string {
    return 'light';
  }
}

export class PersonalThemeStyle implements AbstractStyle {
  public getStyleName(): string {
    return 'personal';
  }
}
