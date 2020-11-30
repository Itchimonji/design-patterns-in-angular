import { Component } from '@angular/core';
import { OnlineOrder } from '../models/online.order';
import { StoreOrder } from '../models/store.order';

@Component({
  selector: 'app-template-method',
  templateUrl: './template-method.component.html',
  styleUrls: ['./template-method.component.scss']
})
export class TemplateMethodComponent {

  // resource: https://www.geeksforgeeks.org/template-method-design-pattern/

  public isGift: boolean;
  public listLogs: string[] = [];

  private onlineOrder: OnlineOrder;
  private storeOrder: StoreOrder;

  public btnOrderOnline(): void {
    this.onlineOrder = new OnlineOrder();
    this.listLogs = this.onlineOrder.processOrder(this.isGift);
  }

  public btnOrderInStore(): void {
    this.storeOrder = new StoreOrder();
    this.listLogs = this.storeOrder.processOrder(this.isGift);
  }
}
