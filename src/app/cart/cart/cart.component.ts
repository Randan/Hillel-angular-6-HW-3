import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartProducts: IProduct[] = [];

  public constructor(private _cartService: CartService) { }

  public ngOnInit() {
    this._cartService.getCart().subscribe((cartProducts: IProduct[]) => this.cartProducts = cartProducts);
  }

}
