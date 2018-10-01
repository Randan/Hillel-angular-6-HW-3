import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.scss']
})
export class ProdListComponent {

  @Input()
  public products: IProduct[];

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  public onAddToCart: EventEmitter<IProduct> = new EventEmitter();

  public addToCart(product: IProduct): void {
    this.onAddToCart.emit(product);
  }
}
