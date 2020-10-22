import { Component, OnInit } from '@angular/core';
import { RealInternet, Proxy } from '../models/internet.model';

@Component({
  selector: 'app-proxy',
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.scss']
})
export class ProxyComponent {
  public logsInternet: string[];
  public logsProxy: string[];
  private internet: RealInternet;
  private proxy: Proxy;

  constructor() {
    this.logsInternet = new Array<string>();
    this.logsProxy = new Array<string>();
    this.internet = new RealInternet();
    this.proxy = new Proxy(this.internet);
  }

  public btnConnectToRealInternet(): void {
    const success: boolean = this.internet.connect();
    this.logsInternet.push('Connect to internet: ' + success.toString());
  }

  public btnConnectToInternetWithProxy(): void {
    const success: boolean = this.proxy.connect();
    this.logsProxy.push('Connect to internet: ' + success.toString());
  }
}
