import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/product.interface';
// import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class ProdListService {

  private _productUrl = `${environment.api}products`;

  public products: IProduct[] = [];

  constructor(private _http: HttpClient) { }

  public getProducts() {
    return this._http.get(this._productUrl);
  }

}
