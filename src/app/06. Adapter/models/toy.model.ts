// target interface - toys dont hunt and only squeak
export interface Toy {
  squeak(): string;
}

export class AnyToy implements Toy {
  public squeak(): string {
    return 'squeaaaaaak...';
  }
}
