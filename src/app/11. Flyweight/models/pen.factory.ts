import { MediumPen, Pen, ThickPen, ThinPen } from './pen.model';

interface IHash {
  [details: string]: Pen;
}

// Flyweight-Factory
export class PenFactory {
  private static pensMap: IHash = {};

  public static getThickPen(color: string): Pen {
    const key: string = color + '-THICK';

    if (this.pensMap[key] != null) {
      return this.pensMap[key];
    } else {
      const pen: Pen = new ThickPen();
      pen.setColor(color);
      this.pensMap[key] = pen;
      return pen;
    }
  }

  public static getThinPen(color: string): Pen {
    const key: string = color + '-THIN';

    if (this.pensMap[key] != null) {
      return this.pensMap[key];
    } else {
      const pen: Pen = new ThinPen();
      pen.setColor(color);
      this.pensMap[key] = pen;
      return pen;
    }
  }

  public static getMediumPen(color: string): Pen {
    const key: string = color + '-MEDIUM';

    if (this.pensMap[key] != null) {
      return this.pensMap[key];
    } else {
      const pen: Pen = new MediumPen();
      pen.setColor(color);
      this.pensMap[key] = pen;
      return pen;
    }
  }
}
