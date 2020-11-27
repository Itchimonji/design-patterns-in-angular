import { Component } from '@angular/core';
import { MobilePhoneOptions } from '../models/phone.options';
import { MobilePhone } from '../models/phone.context';
import { MobilePhoneState } from '../models/screen.state';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent {
  // inspired by https://dev.to/lifelongthinker/the-state-pattern-exemplified-4cbe

  public mobilePhone: MobilePhoneOptions;
  public state: MobilePhoneState;

  constructor() {
    this.mobilePhone = new MobilePhone();
    this.state = this.mobilePhone.state;
  }

  public btnLockScreen(): void {
    this.mobilePhone.lockScreen();
    this.state = this.mobilePhone.state;
  }

  public btnUnlockScreen(): void {
    this.mobilePhone.unlockScreen();
    this.state = this.mobilePhone.state;
  }
}
