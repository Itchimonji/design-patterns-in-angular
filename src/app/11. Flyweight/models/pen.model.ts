import { BrushSize } from './brush-size.enum';

// Flyweight
export interface Pen {
  setColor(color: string): void;
  draw(content: string): string;
}

export class ThickPen implements Pen {
  private readonly brushSize = BrushSize.THICK; // intrinsic state - shareable
  private color: string; // extrinsic state - supplied by client

  public setColor(color: string): void {
    this.color = color;
  }

  public draw(content: string): string {
    return 'Draw THICK content "' + content + '" in color ' + this.color;
  }
}

export class ThinPen implements Pen {
  private readonly brushSize = BrushSize.THIN; // intrinsic state - shareable
  private color: string; // extrinsic state - supplied by client

  public setColor(color: string): void {
    this.color = color;
  }

  public draw(content: string): string {
    return 'Draw THIN content "' + content + '" in color ' + this.color;
  }
}

export class MediumPen implements Pen {
  private readonly brushSize = BrushSize.MEDIUM; // intrinsic state - shareable
  private color: string; // extrinsic state - supplied by client

  public setColor(color: string): void {
    this.color = color;
  }

  public draw(content: string): string {
    return 'Draw MEDIUM content "' + content + '" in color ' + this.color;
  }
}
