import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.scss']
})
export class ProdListComponent {

  @Input()
  public products: Products[];

  @Input()
  public cartProducts: Products[];

  private newProdStatus: boolean;

  public addToCart(product): any {
    if (this.cartProducts[0]) {
      this.newProdStatus = true;
      for (let i = 0; i < this.cartProducts.length; i++) {
        if (product.id === this.cartProducts[i].id) {
          this.cartProducts[i].qty++;
          this.newProdStatus = false;
        }
      }
      if (this.newProdStatus) {
        this.cartProducts.push(product);
      }
    } else {
      this.cartProducts.push(product);
    }
  }
}
