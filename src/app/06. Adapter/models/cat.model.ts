export interface Cat {
  hunt(): string;
  makeSound(): string;
}

// adaptee
export class BritishShortHair implements Cat {
  public hunt(): string {
    return 'Hunting birds..';
  }

  public makeSound(): string {
    return 'Miau.. Miau..';
  }
}

export class NorwegianForest implements Cat {
  public hunt(): string {
    return 'Hunting fish..';
  }

  public makeSound(): string {
    return 'Rrrroar.. Rrrroar..';
  }
}
