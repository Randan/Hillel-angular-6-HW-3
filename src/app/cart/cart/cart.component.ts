import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProduct } from '../../interfaces/product.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartProducts$!: Observable<IProduct[]>;
  public cartProductsLength$!: Observable<number>;
  public cartProducts: IProduct[] = [];

  public constructor(private _cartService: CartService) { }

  public ngOnInit() {
    this.getCart();
  }

  public getCart(): void {
    this.cartProducts$ = this._cartService.getCart();
    this.cartProductsLength$ = this._cartService.getCart().pipe(
      map((cartProducts: IProduct[]) => cartProducts.length)
    );
    this._cartService.getCart().subscribe(
      cartProducts => this.cartProducts = cartProducts
    );
  }

  public removeCartItem(id: string): void {
    this._cartService.removeCartItem(id).subscribe(
      () => console.log(`Product ${id} removed form cart`)
    );
  }

  public changeCartProdQty(product: IProduct, qty: string): void {
    this._cartService.changeCartProdQty(product, qty).subscribe(
      () => console.log(`Product ${product.id} changed amount`)
    );
  }

}
