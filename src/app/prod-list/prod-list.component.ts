import { Component, Input, Output, EventEmitter} from '@angular/core';
export type IProduct = {

}
@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.scss']
})
export class ProdListComponent {

  @Input()
  public products: Products[];

  @Output()
  public onAddToCart: EventEmitter<Products> = new EventEmitter()

  public addToCart(product: Products): void {
    this.onAddToCart.emit(product)
  }
}
