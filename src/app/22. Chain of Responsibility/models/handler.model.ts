import { AbstractHandler } from './handler.abstract';

export class HundredHandler extends AbstractHandler {
  public handle(request: number): string {
    return request >= 100 ? 'number is bigger than 100' : super.handle(request);
  }
}

export class FiftyHandler extends AbstractHandler {
  public handle(request: number): string {
    return request >= 50 ? 'number is bigger than 50' : super.handle(request);
  }
}

export class TwentyHandler extends AbstractHandler {
  public handle(request: number): string {
    return request >= 20 ? 'number is bigger than 20' : super.handle(request);
  }
}

export class TenHandler extends AbstractHandler {
  public handle(request: number): string {
    return request >= 10 ? 'number is bigger than 10' : super.handle(request);
  }
}

export class FiveHandler extends AbstractHandler {
  public handle(request: number): string {
    return request >= 5 ? 'number is bigger than 5' : super.handle(request);
  }
}

export class ThreeHandler extends AbstractHandler {
  public handle(request: number): string {
    return request >= 3 ? 'number is bigger than 3' : super.handle(request);
  }
}

export class OneHandler extends AbstractHandler {
  public handle(request: number): string {
    return request >= 1 ? 'number is bigger than 1' : super.handle(request);
  }
}
