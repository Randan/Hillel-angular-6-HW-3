import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  @Input()
  public cartProducts: Products[];

  @Output()
  public onChangeQty: EventEmitter<{id: string, qty: number}> = new EventEmitter()

  @Output()
  public onRemoveCartItem: EventEmitter<number> = new EventEmitter()

  public changeQty(event: any, i: number, qty: number, product): void {
    this.onChangeQty.emit({id: product.id, qty })
  }

  public removeCartItem(id: number): void {
    this.onRemoveCartItem.emit(id)
  }

}
