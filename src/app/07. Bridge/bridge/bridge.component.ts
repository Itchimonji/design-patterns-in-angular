import { Component, OnInit } from '@angular/core';
import {Radio, TV} from '../models/device.model';
import {AdvancedRemoteControl, RemoteControl} from '../models/remote.model';

@Component({
  selector: 'app-bridge',
  templateUrl: './bridge.component.html',
  styleUrls: ['./bridge.component.scss']
})
export class BridgeComponent {

  // inspired by https://refactoring.guru/design-patterns/bridge

  public tv: TV;
  public remoteTV: RemoteControl;
  public radio: Radio;
  public remoteRadio: RemoteControl;

  constructor() {
    this.tv = new TV();
    this.remoteTV = new RemoteControl(this.tv);
    this.radio = new Radio();
    this.remoteRadio = new AdvancedRemoteControl(this.radio);
  }

  public btnTogglePower(remote: RemoteControl) {
    remote.togglePower();
  }

  public btnVolumeDown(remote: RemoteControl) {
    remote.volumeDown();
  }

  public btnVolumeUp(remote: RemoteControl) {
    remote.volumeUp();
  }

  public btnChannelDown(remote: RemoteControl) {
    remote.channelDown();
  }

  public btnChannelUp(remote: RemoteControl) {
    remote.channelUp();
  }

  public btnMute(advancedRemoteControl: AdvancedRemoteControl) {
    advancedRemoteControl.mute();
  }
}
