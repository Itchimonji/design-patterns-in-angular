import { OrderTemplate } from './order.template';

export class OnlineOrder extends OrderTemplate {
  public selectProducts(): string {
    const result: string[] = [];
    result.push('Item added to online shopping cart');
    result.push('Get gift wrap preference');
    result.push('Get delivery address.');
    return result.join(',');
  }
  public payProducts(): string {
    return 'Online payment through Netbanking, card or immediate reimbursement.';
  }

  public deliverProducts(): string {
    return 'Ship the item through post to delivery address';
  }
}
