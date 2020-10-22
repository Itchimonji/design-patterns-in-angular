export interface Internet {
  connect(): boolean;
  visitSite(site: string): boolean;
}

export class RealInternet implements Internet {
  public connect(): boolean {
    console.log('connect to the internet...');
    return true;
  }

  public visitSite(site: string): boolean {
    console.log('visit site...');
    return true;
  }
}

export class Proxy implements Internet {
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
    return this.isAuthenticated;
  }

  public visitSite(site: string): boolean {
    console.log('Try to visit a site...');
    return this.blackList.indexOf(site) === -1;
  }

  public getSites(): string[] {
    return this.blackList;
  }
}
