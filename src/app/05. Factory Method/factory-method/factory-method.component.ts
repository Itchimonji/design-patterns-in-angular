import { Component, OnInit } from '@angular/core';
import { clientCode } from '../models/client.utils';
import { PizzaCreator, TackoCreator, WrapCreator } from '../models/creator.model';
import {FoodPlanningHistory} from '../models/food-planning-history.model';

@Component({
  selector: 'app-factory-method',
  templateUrl: './factory-method.component.html',
  styleUrls: ['./factory-method.component.scss']
})
export class FactoryMethodComponent {
  private readonly _foodPlanning: FoodPlanningHistory[];
  public get foodPlanning(): FoodPlanningHistory[] {
    return this._foodPlanning;
  }

  constructor() {
    this._foodPlanning = new Array<FoodPlanningHistory>();
  }

  public trackByFn(index, item: FoodPlanningHistory): number {
    return item.index;
  }

  public btnEatPizza(): void {
    const activity: string = clientCode(new PizzaCreator());
    this.addActivityToHistory(activity);
  }

  public btnEatWrap(): void {
    const activity: string = clientCode(new WrapCreator());
    this.addActivityToHistory(activity);
  }

  public btnEatTacko(): void {
    const activity: string = clientCode(new TackoCreator());
    this.addActivityToHistory(activity);
  }

  private addActivityToHistory(activity: string) {
    this._foodPlanning.push(new FoodPlanningHistory(this._foodPlanning.length, activity));
  }
}
