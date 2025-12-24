import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-perents',
  standalone: true,
  imports: [NgFor,Child],
  templateUrl: './perents.html',
  styleUrl: './perents.css',
})
export class Perents {

  products = [
    {
      name: 'מקרר',
      company: 'Samsung',
      description: 'מקרר 4 דלתות',
      price: 5000,
      discount: 10,
      purchases: 120
    },
    {
      name: 'מכונת כביסה',
      company: 'LG',
      description: '7 קילו, פתח קדמי',
      price: 3200,
      discount: 15,
      purchases: 85
    },
    {
      name: 'מקרוגל',
      company: 'Sony',
      description: '55 אינץ׳ 4K',
      price: 4200,
      discount: 5,
      purchases: 200
    }
  ];
  onBuyProduct(product: any) {
    alert('נרכש המוצר: ' + product.name);
    product.purchases++;
  }

get s() {
  return this.products.reduce((sum, element) => sum + element.purchases, 0);
}
}
