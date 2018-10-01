import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { IProduct } from './interfaces/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public products: IProduct;
  public cartProducts: any;

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.getProducts().subscribe((products: IProduct) => this.products = products);
    this._appService.getCart().subscribe((cartProducts: IProduct) => this.cartProducts = cartProducts);
  }

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

  public changeQty(prod) {
    const index: number = this.cartIndexFind(prod.id);
    this.cartProducts[index].qty = prod.qty;
  }

}
