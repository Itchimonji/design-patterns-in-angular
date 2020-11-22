import { Component, OnInit } from '@angular/core';
import {Pen} from '../models/pen.model';
import {PenFactory} from '../models/pen.factory';
import {Md5} from 'ts-md5';

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

  public selectThickPen(): void {
    this.selectedPen = PenFactory.getThickPen(this.selectedColor);
  }

  public selectThinPen(): void {
    this.selectedPen = PenFactory.getThinPen(this.selectedColor);
  }

  public selectMediumPen(): void {
    this.selectedPen = PenFactory.getMediumPen(this.selectedColor);
  }

  public selectColor(): void {
    this.selectedPen?.setColor(this.selectedColor);
  }

  public btnDraw(): void {
    const hashCode: string | Int32Array = Md5.hashStr(JSON.stringify(this.selectedPen));
    this.listLog.push('Hash code of pen: ' + hashCode.toString());
    this.listLog.push(this.selectedPen?.draw(this.text));
    this.listLog.push('');
  }
}
