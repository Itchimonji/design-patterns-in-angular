export interface Internet {
  connect(): boolean;
  visitSite(site: string): boolean;
}

export class RealInternet implements Internet {
  private isConnected = false;

  public connect(): boolean {
    console.log('connect to the internet...');
    this.isConnected = true;
    return true;
  }

  public visitSite(site: string): boolean {
    console.log('visit site:', site);
    return this.isConnected;
  }
}

export interface ProxyInternet extends Internet {
  authenticate(password: string): boolean;
  getBlacklistSites(): string[];
}

export class Proxy implements ProxyInternet {
  readonly password: string = 'top-secret';
  readonly blackList: string[] = ['www.123.com', 'www.abc.com', 'www.you-can-not-pass.com'];

  private internet: Internet;
  private isAuthenticated: boolean;

  constructor(internet: Internet) {
    this.internet = internet;
    this.isAuthenticated = false;
  }

  public authenticate(password: string): boolean {
    this.isAuthenticated = password === this.password;
    return this.isAuthenticated;
  }

  public connect(): boolean {
    console.log('Try to connect to the internet...');
    if (!this.isAuthenticated) {
      return false;
    }
    return this.internet.connect();
  }

  public visitSite(site: string): boolean {
    if (!this.isAuthenticated || !this.internet.visitSite(site)) {
      return this.internet.visitSite(site);
    }
    return this.blackList.indexOf(site) === -1;
  }

  public getBlacklistSites(): string[] {
    return this.blackList;
  }
}
