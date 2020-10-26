import { Component, OnInit } from '@angular/core';
import {Pen} from '../models/pen.model';
import {PenFactory} from '../models/pen.factory';

@Component({
  selector: 'app-flyweight',
  templateUrl: './flyweight.component.html',
  styleUrls: ['./flyweight.component.scss']
})
export class FlyweightComponent {

  // inspired by https://howtodoinjava.com/design-patterns/structural/flyweight-design-pattern/

  public selectedPen: Pen;
  public selectedColor: string;
  public text: string;
  public listLog: string[];

  constructor() {
    this.listLog = new Array<string>();
  }

  public selectThickPen() {
    this.selectedPen = PenFactory.getThickPen(this.selectedColor);
  }

  public selectThinPen() {
    this.selectedPen = PenFactory.getThinPen(this.selectedColor);
  }

  public selectMediumPen() {
    this.selectedPen = PenFactory.getMediumPen(this.selectedColor);
  }

  public btnDraw() {
    this.listLog.push(this.selectedPen?.draw(this.text));
    console.log(this.listLog);
  }
}
