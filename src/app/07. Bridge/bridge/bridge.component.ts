import { Component, OnInit } from '@angular/core';
import {Device, Radio, TV} from '../models/device.model';
import {Abstraction, AdvancedRemoteControl, RefinedAbstraction, RemoteControl} from '../models/remote.model';

@Component({
  selector: 'app-bridge',
  templateUrl: './bridge.component.html',
  styleUrls: ['./bridge.component.scss']
})
export class BridgeComponent {

  // inspired by https://refactoring.guru/design-patterns/bridge

  public tv: Device;
  public radio: Device;
  public remoteTV: Abstraction;
  public remoteRadio: RefinedAbstraction;

  constructor() {
    this.tv = new TV();
    this.remoteTV = new RemoteControl(this.tv);
    this.radio = new Radio();
    this.remoteRadio = new AdvancedRemoteControl(this.radio);
  }

  public btnTogglePower(remote: Abstraction) {
    remote.togglePower();
  }

  public btnVolumeDown(remote: Abstraction) {
    remote.volumeDown();
  }

  public btnVolumeUp(remote: Abstraction) {
    remote.volumeUp();
  }

  public btnChannelDown(remote: Abstraction) {
    remote.channelDown();
  }

  public btnChannelUp(remote: Abstraction) {
    remote.channelUp();
  }

  public btnMute(advancedRemoteControl: RefinedAbstraction) {
    advancedRemoteControl.mute();
  }
}
