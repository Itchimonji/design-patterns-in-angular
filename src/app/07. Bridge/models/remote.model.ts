import { Device } from './device.model';

export interface Abstraction {
  togglePower(): boolean;
  volumeDown(): number;
  volumeUp(): number;
  channelDown(): number;
  channelUp(): number;
}

export interface RefinedAbstraction extends Abstraction{
  mute(): number;
}

// Abstraction
export class RemoteControl implements Abstraction {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  public togglePower(): boolean {
    return this.device.isEnabled() ? this.device.disable() : this.device.enable();
  }

  public volumeDown(): number {
    const currentVolume: number = this.device.getVolume();
    return currentVolume >= 1 ? this.device.setVolume(currentVolume - 1) : this.device.setVolume(0);
  }

  public volumeUp(): number {
    const currentVolume: number = this.device.getVolume();
    return currentVolume <= 99 ? this.device.setVolume(currentVolume + 1) : this.device.setVolume(100);
  }

  public channelDown(): number {
    const currentChannel: number = this.device.getChannel();
    return currentChannel >= 1 ? this.device.setChannel(currentChannel - 1) : this.device.setChannel(0);
  }

  public channelUp(): number {
    const currentChannel: number = this.device.getChannel();
    return currentChannel <= 99 ? this.device.setChannel(currentChannel + 1) : this.device.setChannel(0);
  }
}

export class AdvancedRemoteControl extends RemoteControl implements RefinedAbstraction {
  constructor(device: Device) {
    super(device);
  }

  public mute(): number {
    return this.device.setVolume(0);
  }
}
