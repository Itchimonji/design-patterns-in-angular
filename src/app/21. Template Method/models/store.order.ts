import { OrderTemplate } from './order.template';

export class StoreOrder extends OrderTemplate {
  public selectProducts(): string {
    return 'Customer chooses the item from shelf.';
  }
  public payProducts(): string {
    return 'Pays at counter through cash.';
  }

  public deliverProducts(): string {
    return 'Item delivered to in delivery counter.';
  }
}
