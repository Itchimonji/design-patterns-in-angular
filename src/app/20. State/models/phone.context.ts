import { MobilePhoneOptions } from './phone.options';
import { LockedScreen, MobilePhoneState } from './screen.state';

// Context
export class MobilePhone implements MobilePhoneOptions {
  private _state: MobilePhoneState;
  private countLockedScreen: number;

  constructor() {
    this.countLockedScreen = 0;
    this._state = new LockedScreen();
    this.logCurrentState();
  }

  private logCurrentState(): void {
    console.log(this._state);
  }

  public get state(): MobilePhoneState {
    return this._state;
  }

  public get name(): string {
    return this._state.name;
  }

  public lockScreen(): void {
    this.countLockedScreen >= 5
      ? (this._state = this._state.showLowBatteryScreen())
      : (this._state = this._state.lockScreen());
    ++this.countLockedScreen;
    this.logCurrentState();
  }
  public unlockScreen(): void {
    this._state = this._state.unlockScreen();
    this.logCurrentState();
  }
  public showLowBatteryScreen(): void {
    this._state = this._state.showLowBatteryScreen();
    this.logCurrentState();
  }
}
