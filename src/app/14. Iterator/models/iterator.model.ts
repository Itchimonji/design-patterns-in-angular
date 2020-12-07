import { WordsCollection } from './words-collection.model';
import { Iterator } from './iterator.interface';

export class AlphabeticalOrderIterator implements Iterator<string> {
  private collection: WordsCollection;
  private position: number;
  private readonly reverse: boolean = false;

  constructor(collection: WordsCollection, reverse: boolean = false) {
    this.collection = collection;
    this.reverse = reverse;
    this.position = 0;

    if (reverse === true) {
      this.position = collection.count - 1;
    }
  }

  public rewind(): void {
    this.position = this.reverse ? this.collection.count - 1 : 0;
  }

  public current(): string {
    return this.collection.items[this.position];
  }

  public key(): number {
    return this.position;
  }

  public next(): string {
    const item: string = this.collection.items[this.position];
    this.position += this.reverse ? -1 : 1;
    return item;
  }

  public valid(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }

    return this.position < this.collection.count;
  }
}
