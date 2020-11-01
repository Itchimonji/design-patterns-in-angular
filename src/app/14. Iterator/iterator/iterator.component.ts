import { Component, OnInit } from '@angular/core';
import {WordsCollection} from '../models/words-collection.model';
import {Aggregator} from '../models/aggregator.interface';
import { Iterator } from '../models/iterator.interface';

@Component({
  selector: 'app-iterator',
  templateUrl: './iterator.component.html',
  styleUrls: ['./iterator.component.scss']
})
export class IteratorComponent {

  public value: string;
  public output: string;

  readonly collection: Aggregator;
  readonly iterator: Iterator<string>;

  constructor() {
    this.collection = new WordsCollection();
    this.iterator = this.collection.getIterator();
    this.value = '';
    this.output = '';
  }

  public btnAddItemToCollection(value: string) {
    this.collection.addItem(value);
    this.value = '';
    document.getElementById('input').focus();
  }

  public btnSliceCollectionItems(): void {
    this.output = '';
    while (this.iterator.valid()) {
      this.output += this.iterator.next() + ',';
    }
    this.output = this.output.slice(0, -1);
  }
}
