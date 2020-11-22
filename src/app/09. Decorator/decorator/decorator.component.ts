import { Component, OnInit } from '@angular/core';
import { Margherita, Pizza, Detroit, Fugazzeta } from '../models/pizza.model';
import {
  ExtraCheeseToppingDecorator,
  JalapenoToppingDecorator,
  MushroomToppingDecorator
} from '../models/topping.decorator';
import {ExtraExtraCheeseToppingDecorator, HotJalapenoToppingDecorator} from '../models/extend-topping.decorator';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.scss']
})
export class DecoratorComponent {
  public price: number;
  public toppings: string[];
  public pizzas: Pizza[];

  public pizza: Pizza;

  constructor() {
    this.price = 0;
    this.toppings = new Array<string>();
    this.initPizzas();
  }

  // normal toppings

  public btnCheese(): void {
    const decorator = new ExtraCheeseToppingDecorator(this.pizza);
    this.logOrder(decorator);
  }

  public btnMushrooms(): void {
    const decorator = new MushroomToppingDecorator(this.pizza);
    this.logOrder(decorator);
  }

  public btnJalapeno(): void {
    const decorator = new JalapenoToppingDecorator(this.pizza);
    this.logOrder(decorator);
  }

  // composition toppings

  public btnCheeseAndJalapeno(): void {
    const cheeseDecorator = new ExtraCheeseToppingDecorator(this.pizza);
    const cheeseAndJalapenoDecorator = new JalapenoToppingDecorator(cheeseDecorator);
    this.logOrder(cheeseAndJalapenoDecorator);
  }

  public btnCheeseAndMushrooms(): void {
    const cheeseDecorator = new ExtraCheeseToppingDecorator(this.pizza);
    const cheeseAndMushroomDecorator = new MushroomToppingDecorator(cheeseDecorator);
    this.logOrder(cheeseAndMushroomDecorator);
  }

  // inherited toppings

  public btnExtraCheese(): void {
    const decorator = new ExtraExtraCheeseToppingDecorator(this.pizza);
    this.logOrder(decorator);
  }

  public btnHotJalapeno(): void {
    const decorator = new HotJalapenoToppingDecorator(this.pizza);
    this.logOrder(decorator);
  }

  private logOrder(decorator: Pizza) {
    this.price = decorator.getPrice();
    this.toppings.push(decorator.getTopping());
  }

  private initPizzas() {
    this.pizzas = new Array<Pizza>();
    this.pizzas.push(new Margherita());
    this.pizzas.push(new Detroit());
    this.pizzas.push(new Fugazzeta());
  }
}
