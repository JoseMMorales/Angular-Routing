import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, ProductResolved } from '../product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: Product | null = null;
  errorMessage: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const resolvedData: ProductResolved =
      this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData?.error;
    this.onProductRetrieved(resolvedData.product);
  }

  onProductRetrieved(product: Product | null): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
}
