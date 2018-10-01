import { Injectable } from '@angular/core';
// import { UUID } from 'angular2-uuid';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _productUrl = `${environment.api}products`;
  private _cartUrl = `${environment.api}cart`;

  constructor(private _http: HttpClient) { }

  public getProducts() {
    return this._http.get(this._productUrl);
  }

  public getCart() {
    return this._http.get(this._cartUrl);
  }
}
