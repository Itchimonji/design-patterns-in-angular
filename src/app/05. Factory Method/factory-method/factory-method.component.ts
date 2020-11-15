import { Component, OnInit } from '@angular/core';
import { clientCode } from '../models/client.utils';
import { PizzaCreator, TackoCreator, WrapCreator } from '../models/creator.model';

export class FoodPlanningHistory {
  index: number;
  activity: string;

  constructor(index: number, activity: string) {
    this.index = index;
    this.activity = activity;
  }
}

@Component({
  selector: 'app-factory-method',
  templateUrl: './factory-method.component.html',
  styleUrls: ['./factory-method.component.scss']
})
export class FactoryMethodComponent {
  public foodPlanning: FoodPlanningHistory[];

  constructor() {
    this.foodPlanning = new Array<FoodPlanningHistory>();
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
    this.foodPlanning.push(new FoodPlanningHistory(this.foodPlanning.length, activity));
  }
}
