import { Component, OnInit } from '@angular/core';
import {Cat, NorwegianForest} from "../models/cat.model";
import {Toy, ToyCat} from "../models/toy.model";
import {CatAdapter} from "../models/cat.adapter";

@Component({
  selector: 'app-adapter',
  templateUrl: './adapter.component.html',
  styleUrls: ['./adapter.component.scss']
})
export class AdapterComponent {
  public catSounds: string[];
  public toySounds: string[];
  public catAdapterSounds: string[];

  private cat: Cat; // adaptee
  private toy: Toy; // target interface
  private catAdapter: Toy; // adapter

  constructor() {
    this.catSounds = [];
    this.toySounds = [];
    this.catAdapterSounds = [];

    this.client();
  }

  public btnCatSound() {
    this.catSounds.push(this.cat.makeSound());
  }

  public btnToySound() {
    this.toySounds.push(this.toy.squeak());
  }

  public btnCatAdapterSound() {
    this.catAdapterSounds.push(this.catAdapter.squeak());
  }

  private client(): void {

    // inspired by
    // https://www.geeksforgeeks.org/adapter-pattern/

    this.cat = new NorwegianForest();
    this.toy = new ToyCat();
    this.catAdapter = new CatAdapter(this.cat);
  }

}
