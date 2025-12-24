import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  @Input() product!: {
    name: string;
    company: string;
    description: string;
    price: number;
    discount: number;
    purchases: number;
  };

  get afterdiscount() {
    if (!this.product) return 0; // או undefined
    return this.product.price - (this.product.price * this.product.discount / 100);
  }

  get big() {
    if (!this.product) return 0;
    return this.product.price * this.product.discount / 100;
  }

  @Output() buyProduct = new EventEmitter<any>();

  onBuy() {
    this.buyProduct.emit(this.product);
  }
}
