import { Component, OnInit } from '@angular/core';
import {  NgFor, NgIf, NgStyle } from '@angular/common';
import { discountServices } from "../services/discount.services";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-discount',
  standalone: true,
  imports: [NgFor,NgIf,NgStyle,FormsModule],
  36
  templateUrl: './discount.html',
  styleUrl: './discount.css'
})
export class Discount implements OnInit{
  constructor(private discountService: discountServices) {
  
}

langueth: any;
lastData: any;


hebrow=true;

ngOnInit() {
  this.langueth=this.discountService.langueth;
  this.lastData=this.discountService.lastData;
    
  }


}

