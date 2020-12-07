import { Iterator } from './iterator.interface';

// Aggregate interface
export interface Aggregator {
  getIterator(): Iterator<string>;
  addItem(item: string): void;
  removeItem(item: string): void;
}
