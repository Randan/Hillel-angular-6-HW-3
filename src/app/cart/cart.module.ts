import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartComponent],
  providers: [CartService],
  exports: [CartComponent]
})
export class CartModule { }
