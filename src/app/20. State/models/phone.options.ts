import { MobilePhoneState } from './screen.state';

export interface MobilePhoneOptions {
  state: MobilePhoneState;
  name: string;
  lockScreen(): void;
  unlockScreen(): void;
  showLowBatteryScreen(): void;
}
