import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  @Input()
  public cartProducts: Products[];

  public changeQty(event: any, i: number, value: number): void {
    this.cartProducts[i].qty = value;
  }
  public removeCartItem(i: number): void {
    this.cartProducts[i].qty = 1;
    this.cartProducts.splice(i, 1);
  }

}
