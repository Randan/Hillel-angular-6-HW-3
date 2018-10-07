import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/product.interface';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class ProdListService {

  private _productUrl = `${environment.api}products`;

  constructor(private _http: HttpClient) { }

  public getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl).pipe(
      catchError((error: Error) => {
        console.log(error);
        return of([]);
      })
    );
  }

}
