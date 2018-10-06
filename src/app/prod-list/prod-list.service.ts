import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    });

    return this._http.get<IProduct[]>(this._productUrl).pipe(
      catchError((error: Error) => {
        console.log(error);
        return of([]);
      })
    );

  }

}
