import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { ProdListService } from '../prod-list.service';
import { CartService } from '../../cart/cart.service';
import { Observable } from 'rxjs';
// import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.scss']
})
export class ProdListComponent implements OnInit {

  public products$!: Observable<IProduct[]>;
  public products: IProduct[] = [];

  public constructor(
    private _prodListService: ProdListService,
    private _cartService: CartService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  public getProducts(): void {
    this._prodListService.getProducts().subscribe(
      products => this.products = products
    );
  }

  public addToCart(product: IProduct): void {
    this._cartService.addToCart(product).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
