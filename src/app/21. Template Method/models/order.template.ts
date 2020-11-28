export abstract class OrderTemplate {
  private _isGift: boolean;

  public abstract selectProducts(): string;
  public abstract payProducts(): string;
  public abstract deliverProducts(): string;

  public wrapProductAsGift(): string {
    return 'Products are wrapped as a gift';
  }

  public processOrder(isGift: boolean): string[] {
    this._isGift = isGift;
    const result: string[] = [];
    result.push(this.selectProducts());
    result.push(this.payProducts());
    if (this._isGift) {
      result.push(this.wrapProductAsGift());
    }
    result.push(this.deliverProducts());
    return result;
  }
}
