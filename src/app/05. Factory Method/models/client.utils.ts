import { Creator } from './creator.model';

export function clientCode(creator: Creator): string {
  return creator.produceAndEat();
}
