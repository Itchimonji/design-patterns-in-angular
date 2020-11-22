import { Component } from '@angular/core';
import { RealInternet, Proxy, Internet, ProxyInternet } from '../models/internet.model';

@Component({
  selector: 'app-proxy',
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.scss']
})
export class ProxyComponent {
  public logsInternet: string[];
  public logsProxy: string[];
  public selectedSite: string;
  public listSites: string[];

  private internet: Internet;
  private proxy: ProxyInternet;
  private whiteList = ['www.mc-paper.com', 'www.abra.com', 'www.kadabra.com'];

  constructor() {
    this.logsInternet = new Array<string>();
    this.logsProxy = new Array<string>();
    this.init();
  }

  private init() {
    this.internet = new RealInternet();
    this.proxy = new Proxy(this.internet);
    this.listSites = [...this.proxy.getBlacklistSites(), ...this.whiteList];
  }

  public btnConnectToRealInternet(): void {
    const success: boolean = this.internet.connect();
    this.logsInternet.push('Connect to internet: ' + success.toString());
  }

  public btnConnectToInternetWithProxy(): void {
    const success: boolean = this.proxy.connect();
    this.logsProxy.push('Connect to internet: ' + success.toString());
  }

  public selectionInternetChanged(): void {
    const success = this.internet.visitSite(this.selectedSite);
    this.logsInternet.push('visit "' + this.selectedSite + '" : ' + success.toString());
  }

  public selectionProxyChanged(): void {
    const success = this.proxy.visitSite(this.selectedSite);
    this.logsProxy.push('visit "' + this.selectedSite + '" : ' + success.toString());
  }

  public btnReset(): void {
    this.init();
  }

  public btnAuthenticate(): void {
    const isAuthenticated: boolean = this.proxy.authenticate('top-secret');
    this.logsProxy.push('Is authenticated:  ' + isAuthenticated.toString());
  }
}
