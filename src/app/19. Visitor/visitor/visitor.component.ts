import { Component } from '@angular/core';
import { Fruit } from '../models/fruit.interface';
import { FruitFactory } from '../models/fruit.factory';
import { FruitPartitioner, FruitVisitor } from '../models/fruit.visitor';
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
    this._listFruit = new FruitFactory().getFruits();
    this.fruitPartitioner = new FruitPartitioner();
  }

  public getSize(sizeAsNumber: number): string {
    return this.size[sizeAsNumber];
  }

  btnPartition(): void {
    console.log(this.listFruit);
    // best practise: iterator pattern for foreach-loops
    this.listFruit.forEach((fruit: Fruit) => {
      // calls the accept method of the concrete object, e.g. Orange.accept
      // in this example, orange's accept method is called 5 times > so, length = 5
      fruit.accept(this.fruitPartitioner);
    });

    this.log.push('Oranges: ' + this.fruitPartitioner.oranges.length.toString());
    this.log.push('Apples: ' + this.fruitPartitioner.apples.length.toString());
    this.log.push('Bananas: ' + this.fruitPartitioner.bananas.length.toString());
    this.log.push('Cherries: ' + this.fruitPartitioner.cherries.length.toString());
  }
}
