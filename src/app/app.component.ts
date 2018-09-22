import { IProduct } from './prod-list/prod-list.component';
import { Component } from '@angular/core';
// import { UUID } from 'angular2-uuid';
import { UUID } from 'angular2-uuid';

interface ICart extends IProduct {
  ammount: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // public prodId: any = require('uuid/v4');
  public products: Products[] = [
    {
      id: UUID.UUID(),
      imgsrc: '../assets/img/products/1.jpg',
      title: 'Silver spinner',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime vel animi est praesentium velit qui at dicta recusandae a vero earum, repellat eius beatae ab neque consectetur quae aperiam.',
      price: 8,
      qty: 1
    },
    {
      id: ,
      imgsrc: '../assets/img/products/2.jpg',
      title: 'Black spinner',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime vel animi est praesentium velit qui at dicta recusandae a vero earum, repellat eius beatae ab neque consectetur quae aperiam.',
      price: 5,
      qty: 1
    },
    {
      id: 3,
      imgsrc: '../assets/img/products/3.jpg',
      title: 'Gold spinner',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime vel animi est praesentium velit qui at dicta recusandae a vero earum, repellat eius beatae ab neque consectetur quae aperiam.',
      price: 10,
      qty: 1
    },
    {
      id: 4,
      imgsrc: '../assets/img/products/4.jpg',
      title: 'Black blinking spinner',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime vel animi est praesentium velit qui at dicta recusandae a vero earum, repellat eius beatae ab neque consectetur quae aperiam.',
      price: 9,
      qty: 1
    },
    {
      id: 5,
      imgsrc: '../assets/img/products/5.jpg',
      title: 'Pink spinner',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime vel animi est praesentium velit qui at dicta recusandae a vero earum, repellat eius beatae ab neque consectetur quae aperiam.',
      price: 15,
      qty: 1
    },
    {
      id: 6,
      imgsrc: '../assets/img/products/6.jpg',
      title: 'White blinking spinner',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime vel animi est praesentium velit qui at dicta recusandae a vero earum, repellat eius beatae ab neque consectetur quae aperiam.',
      price: 7,
      qty: 1
    },
    {
      id: 7,
      imgsrc: '../assets/img/products/7.jpg',
      title: 'Blue spinner',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime vel animi est praesentium velit qui at dicta recusandae a vero earum, repellat eius beatae ab neque consectetur quae aperiam.',
      price: 5,
      qty: 1
    },
    {
      id: 8,
      imgsrc: '../assets/img/products/8.jpg',
      title: 'Yellow spinner',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime vel animi est praesentium velit qui at dicta recusandae a vero earum, repellat eius beatae ab neque consectetur quae aperiam.',
      price: 8,
      qty: 1
    },
    {
      id: 9,
      imgsrc: '../assets/img/products/9.jpg',
      title: 'Red spinner',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime vel animi est praesentium velit qui at dicta recusandae a vero earum, repellat eius beatae ab neque consectetur quae aperiam.',
      price: 10,
      qty: 1
    },
    {
      id: 10,
      imgsrc: '../assets/img/products/10.jpg',
      title: 'Purple spinner',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime vel animi est praesentium velit qui at dicta recusandae a vero earum, repellat eius beatae ab neque consectetur quae aperiam.',
      price: 11,
      qty: 1
    },
    {
      id: 11,
      imgsrc: '../assets/img/products/11.jpg',
      title: 'Green spinner',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime vel animi est praesentium velit qui at dicta recusandae a vero earum, repellat eius beatae ab neque consectetur quae aperiam.',
      price: 15,
      qty: 1
    },
    {
      id: 12,
      imgsrc: '../assets/img/products/12.jpg',
      title: 'Orange spinner',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime vel animi est praesentium velit qui at dicta recusandae a vero earum, repellat eius beatae ab neque consectetur quae aperiam.',
      price: 5,
      qty: 1
    }
  ];

  public cartProducts: Products[] = [
    // {
    //   id: 1,
    //   imgsrc: '../assets/img/products/1.jpg',
    //   title: 'Silver spinner',
    //   desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime vel animi est praesentium velit qui at dicta recusandae a vero earum, repellat eius beatae ab neque consectetur quae aperiam.',
    //   price: 8,
    //   qty: 1
    // }
  ];

  public addToCart(product: Products): void {
    // const index:Products = this.cartProducts.findIndex((element: Products) => element.id === product.id)
    // if(!index) {
    //    this.cartProducts.push(product);
    //    return
    // }
    // item['qty'] =  item.qty + 1
    // this.cartProducts.slice(index, {})
  }

  public removeCartItem(id: number): void {
    this.cartProducts.slice(id, 1);
  }

}
