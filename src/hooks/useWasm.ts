import { Injectable, NgZone } from '@angular/core';
import { loadPrivIdModule } from '@privateid/cryptonets-web-sdk-alpha';
import { getUrlParameter } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class WasmService {
  private isLoading = false;
  private ready = false;
  private wasmStatus: any = { isChecking: true };

  constructor(private ngZone: NgZone) {}

  public async init(): Promise<void> {
    const apiKey = getUrlParameter('api_key', null);
    const apiUrl = getUrlParameter('api_url', null);
    const isSupported = await loadPrivIdModule(
      apiUrl,
      apiKey,
      null,
      null,
      true
    );
    this.ngZone.run(() => {
      if (isSupported.support) {
        this.ready = true;
        this.wasmStatus = { isChecking: false, ...isSupported };
      } else {
        this.ready = false;
        this.wasmStatus = { isChecking: false, ...isSupported };
      }
    });
  }

  public async useWasm(): Promise<{ ready: boolean; wasmStatus: any }> {
    if (this.ready) {
      return { ready: this.ready, wasmStatus: this.wasmStatus };
    }

    return { ready: this.ready, wasmStatus: this.wasmStatus };
  }
}