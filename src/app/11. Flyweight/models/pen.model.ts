// Flyweight
import {BrushSize} from './brush-size.enum';

export interface Pen {
  setColor(color: string);
  draw(content: string);
}

export class ThickPen implements Pen {
  readonly brushSize = BrushSize.THICK; // intrinsic state - shareable
  private color: string; // extrinsic state - supplied by client

  public setColor(color: string) {
    this.color = color;
  }

  public draw(content: string) {
    return 'Draw THICK content in color ' + this.color;
  }
}

export class ThinPen implements Pen {
  readonly brushSize = BrushSize.THIN; // intrinsic state - shareable
  private color: string; // extrinsic state - supplied by client

  public setColor(color: string) {
    this.color = color;
  }

  public draw(content: string) {
    return 'Draw THIN content in color ' + this.color;
  }
}

export class MediumPen implements Pen {
  readonly brushSize = BrushSize.MEDIUM; // intrinsic state - shareable
  private color: string; // extrinsic state - supplied by client

  public setColor(color: string) {
    this.color = color;
  }

  public draw(content: string) {
    return 'Draw MEDIUM content in color ' + this.color;
  }
}
