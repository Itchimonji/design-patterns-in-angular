import { Component } from '@angular/core';
import { Fruit } from '../models/fruit.interface';
import { FruitFactory } from '../models/fruit.factory';
import {FruitPartitioner, FruitVisitor} from '../models/fruit.visitor';
import { Size } from '../models/size.enum';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss']
})
export class VisitorComponent {

  // https://stackoverflow.com/questions/2604169/visitor-patterns-purpose-with-examples

  public size = Size;

  private readonly fruitPartitioner: FruitVisitor;
  private readonly _listFruit: Fruit[];

  public get listFruit(): Fruit[] {
    return this._listFruit;
  }

  public log: string[] = [];

  constructor() {
    this._listFruit = (new FruitFactory()).getFruits();
    this.fruitPartitioner = new FruitPartitioner();
  }

  public getSize(sizeAsNumber: number): string {
    return this.size[sizeAsNumber];
  }

  btnPartition(): void {
    console.log(this.listFruit);
    this.listFruit.forEach((fruit: Fruit) => {
      fruit.accept(this.fruitPartitioner);
    });

    this.log.push('Oranges: ' + this.fruitPartitioner.Oranges.length.toString());
    this.log.push('Apples: ' + this.fruitPartitioner.Apples.length.toString());
    this.log.push('Bananas: ' + this.fruitPartitioner.Bananas.length.toString());
    this.log.push('Cherries: ' + this.fruitPartitioner.Cherries.length.toString());
  }
}
