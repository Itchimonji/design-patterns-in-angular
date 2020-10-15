export interface Food {
  produce(): string;
  eat(): string;
}

export class Pizza implements Food {
  public produce(): string {
    return 'Let`s make Pizza.';
  }

  public eat(): string {
    return 'Let`s eat Pizza.';
  }
}

export class Wrap implements Food {
  public produce(): string {
    return 'Let`s make a Wrap.';
  }

  public eat(): string {
    return 'Let`s eat a Wrap.';
  }
}

export class Tacko implements Food {
  public produce(): string {
    return 'Let`s make a Tacko.';
  }

  public eat(): string {
    return 'Let`s eat a Tacko.';
  }
}
