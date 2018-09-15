import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public products: Products[] = [
    {
      id: 1,
      imgsrc: '../assets/img/products/1.jpg',
      title: 'Spinner silver',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime vel animi est praesentium velit qui at dicta recusandae a vero earum, repellat eius beatae ab neque consectetur quae aperiam.',
      price: 8
    },
    {
      id: 2,
      imgsrc: '../assets/img/products/2.jpg',
      title: 'Spinner black',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime vel animi est praesentium velit qui at dicta recusandae a vero earum, repellat eius beatae ab neque consectetur quae aperiam.',
      price: 5
    },
    {
      id: 3,
      imgsrc: '../assets/img/products/3.jpg',
      title: 'Spinner gold',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime vel animi est praesentium velit qui at dicta recusandae a vero earum, repellat eius beatae ab neque consectetur quae aperiam.',
      price: 10
    },
    {
      id: 4,
      imgsrc: '../assets/img/products/4.jpg',
      title: 'Spinner black blinking',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime vel animi est praesentium velit qui at dicta recusandae a vero earum, repellat eius beatae ab neque consectetur quae aperiam.',
      price: 9
    },
    {
      id: 5,
      imgsrc: '../assets/img/products/5.jpg',
      title: 'Spinner pink',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime vel animi est praesentium velit qui at dicta recusandae a vero earum, repellat eius beatae ab neque consectetur quae aperiam.',
      price: 15
    },
    {
      id: 6,
      imgsrc: '../assets/img/products/6.jpg',
      title: 'Spinner white blinking',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime vel animi est praesentium velit qui at dicta recusandae a vero earum, repellat eius beatae ab neque consectetur quae aperiam.',
      price: 7
    },
    {
      id: 7,
      imgsrc: '../assets/img/products/7.jpg',
      title: 'Spinner blue',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime vel animi est praesentium velit qui at dicta recusandae a vero earum, repellat eius beatae ab neque consectetur quae aperiam.',
      price: 5
    },
    {
      id: 8,
      imgsrc: '../assets/img/products/8.jpg',
      title: 'Spinner yellow',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime vel animi est praesentium velit qui at dicta recusandae a vero earum, repellat eius beatae ab neque consectetur quae aperiam.',
      price: 8
    },
    {
      id: 9,
      imgsrc: '../assets/img/products/9.jpg',
      title: 'Spinner red',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime vel animi est praesentium velit qui at dicta recusandae a vero earum, repellat eius beatae ab neque consectetur quae aperiam.',
      price: 10
    },
  ];

}
