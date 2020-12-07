export interface Card {
  title: string;
  description: string;
  color: string;
}

export class MatCard implements Card {
  public title: string;
  public description: string;
  public color: string;

  constructor(title: string, description: string, color: string) {
    this.title = title;
    this.description = description;
    this.color = color;
  }
}
