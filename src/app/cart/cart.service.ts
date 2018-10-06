import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cartUrl = `${environment.api}cart`;

  public cartProducts: IProduct[] = [];

  public constructor(private _http: HttpClient) { }

  public cartIndexFind(itemId): number {
    return this.cartProducts.findIndex((element: IProduct) => element.id === itemId);
  }

  public addToCart(product: IProduct): void {
    const index: number = this.cartIndexFind(product.id);
    if (index === -1) {
      this.cartProducts.push(product);
      return;
    }
    this.cartProducts[index].qty++;
  }

  public removeCartItem(id: string): void {
    const index: number = this.cartIndexFind(id);
    this.cartProducts[index].qty = 1;
    this.cartProducts.splice(index, 1);
  }

  public changeQty(prod): void {
    const index: number = this.cartIndexFind(prod.id);
    this.cartProducts[index].qty = prod.qty;
  }

  public getCart(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._cartUrl).pipe(
      catchError((error: Error) => {
        console.log(error);
        return of([]);
      })
    );
  }

}
