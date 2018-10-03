import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { AppService } from '../app.service';
// import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.scss']
})
export class ProdListComponent implements OnInit {

  public products: IProduct[] = [];

  @Input()
  cartProducts: IProduct[];

  public constructor(private _AppService: AppService) { }

  ngOnInit() {
    this._AppService.getProducts().subscribe((products: IProduct[]) => this.products = products);
  }

  public addToCart(product: IProduct): void {
    const index: number = this.cartIndexFind(product.id);
    if (index === -1) {
      this.cartProducts.push(product);
      return;
    }
    this.cartProducts[index].qty++;
  }

  public cartIndexFind(itemId): number {
    return this.cartProducts.findIndex((element: IProduct) => element.id === itemId);
  }

}
