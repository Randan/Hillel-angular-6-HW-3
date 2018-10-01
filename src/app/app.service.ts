import { Injectable } from '@angular/core';
// import { UUID } from 'angular2-uuid';
import { HttpClient } from '@angular/common/http';

export interface IProduct {
  id: string;
  imgsrc: string;
  title: string;
  desc: string;
  price: number;
  qty: number;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _url = 'http://localhost:3000/';
  private _productUrl = this._url + 'products';
  private _cartUrl = this._url + 'cart';

  constructor(private _http: HttpClient) { }

  public getProducts() {
    return this._http.get(this._productUrl);
  }

  public getCart() {
    return this._http.get(this._cartUrl);
  }
}
