import { Component } from '@angular/core';
import { MobilePhoneOptions } from '../models/phone.options';
import { MobilePhone } from '../models/phone.context';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent {

  // inspired by https://dev.to/lifelongthinker/the-state-pattern-exemplified-4cbe

  public mobilePhone: MobilePhoneOptions;

  constructor() {
    this.mobilePhone = new MobilePhone();
  }

  public btnLockScreen(): void {
    this.mobilePhone.lockScreen();
  }

  public btnUnlockScreen(): void {
    this.mobilePhone.unlockScreen();
  }
}
