// Bridge - Implementor
export interface Device {
  isEnabled(): boolean;
  enable(): boolean;
  disable(): boolean;
  getVolume(): number;
  setVolume(percentage: number): number;
  getChannel();
  setChannel(channel: number): number;
}

// concrete Implementor A
export class Radio implements Device {
  private enabled: boolean;
  private volume: number;
  private channel: number;

  constructor() {
    this.enabled = false;
    this.volume = 15;
    this.channel = 13;
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  public enable(): boolean {
    this.enabled = true;
    return this.isEnabled();
  }

  public disable(): boolean {
    this.enabled = false;
    return this.isEnabled();
  }

  public getVolume(): number {
    return this.volume;
  }

  public setVolume(percentage: number): number {
    this.volume = percentage;
    return this.getVolume();
  }

  public getChannel(): number {
    return this.channel;
  }

  public setChannel(channel: number): number {
    this.channel = channel;
    return this.getChannel();
  }
}

// concrete Implementor B
export class TV implements Device {
  private enabled: boolean;
  private volume: number;
  private channel: number;

  constructor() {
    this.enabled = false;
    this.volume = 23;
    this.channel = 1;
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  public enable(): boolean {
    this.enabled = true;
    return this.isEnabled();
  }

  public disable(): boolean {
    this.enabled = false;
    return this.isEnabled();
  }

  public getVolume(): number {
    return this.volume;
  }

  public setVolume(percentage: number): number {
    this.volume = percentage;
    return this.getVolume();
  }

  public getChannel() {
    return this.channel;
  }

  public setChannel(channel: number): number {
    this.channel = channel;
    return this.getChannel();
  }
}
