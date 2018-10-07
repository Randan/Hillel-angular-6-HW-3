import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of, } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  [x: string]: any;

  private _cartUrl = `${environment.api}cart`;

  public constructor(
    private _http: HttpClient
  ) { }

  public getCart(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._cartUrl)
      .pipe(
        catchError(this.handleError('Get Cart', []))
      );
  }

  public addToCart(product: IProduct): Observable<IProduct> {
    // const body = product;
    const body = JSON.stringify(product);
    console.log(body);
    return this._http.post<IProduct>(this._cartUrl, body)
      .pipe(
        catchError(this.handleError<IProduct>('Add to Cart'))
      );
  }

  public changeCartProdQty(product: IProduct): Observable<IProduct> {
    // const body = product;
    const body = JSON.stringify(product);
    console.log(body);
    return this._http.put<IProduct>(this._cartUrl + '/', body)
      .pipe(
        catchError(this.handleError<IProduct>('Add to Cart'))
      );
  }

  public removeCartItem(id: string) {
    return this._http.delete<void>(this._cartUrl + '/' + id)
      .pipe(
        catchError(this.handleError('Delete Cart item', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
