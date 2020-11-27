import { MobilePhoneOptions } from './phone.options';

export abstract class MobilePhoneState implements MobilePhoneOptions {
  public lockScreen(): MobilePhoneState {
    throw new Error('Invalid operation');
  }
  public unlockScreen(): MobilePhoneState {
    throw new Error('Invalid operation');
  }
  public showLowBatteryScreen(): MobilePhoneState {
    throw new Error('Invalid operation');
  }
}

export class LockedScreen extends MobilePhoneState {
  public unlockScreen(): MobilePhoneState {
    return new UnLockedScreen();
  }
}

export class UnLockedScreen extends MobilePhoneState {
  public lockScreen(): MobilePhoneState {
    return new LockedScreen();
  }

  public showLowBatteryScreen(): MobilePhoneState {
    return new LowBatteryScreen();
  }
}

export class LowBatteryScreen extends MobilePhoneState {
  public unlockScreen(): MobilePhoneState {
    return new UnLockedScreen();
  }
}
