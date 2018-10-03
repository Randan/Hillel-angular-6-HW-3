import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { ProdListService } from './prod-list.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.scss']
})
export class ProdListComponent implements OnInit {

  @Input()
  products: IProduct[];

  @Input()
  cartProducts: IProduct[];

  public constructor(private _ProdListService: ProdListService) { }

  ngOnInit() {
    this._ProdListService.getProducts().subscribe((products: IProduct[]) => this.products = products);
  }

  public addToCart(product: IProduct): void {
    const index: number = this.cartIndexFind(product.id);
    if (index === -1) {
      this.cartProducts.push(product);
      return;
    }
    this.cartProducts[index].qty++;
  }

}
