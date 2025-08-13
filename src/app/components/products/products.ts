import { Component, inject, OnInit } from '@angular/core';
import { Sproducts } from '../../services/sproducts';
import { Iproducts } from '../../interfaces/iproducts';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  private readonly sproducts = inject(Sproducts)

  productsData: Iproducts[] = [];
  moreData: Iproducts[] = [];
  showMore = false;

  ngOnInit() {
    this.getProductsData();
  }

  getProductsData() {
    this.sproducts.getProducts().subscribe({
      next: (data) => {
        this.productsData = data.slice(0, 8);

      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Product fetching completed');
      }
    });
  }
  loadMoreProducts() {
    this.showMore = true;

    this.sproducts.getProducts().subscribe({
      next: (data) => {
        this.moreData = data.slice(8, 12);
      },
      error: (error) => {
        console.error('Error fetching more products:', error);
      }
    });
  }

}
