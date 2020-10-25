import {Device} from './device.model';

// Abstraction
export class RemoteControl {
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

export class AdvancedRemoteControl extends RemoteControl {
  constructor(device: Device) {
    super(device);
  }

  public mute(): number {
    return this.device.setVolume(0);
  }
}
