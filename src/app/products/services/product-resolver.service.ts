import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { ProductResolved } from '../product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<ProductResolved> {
  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ProductResolved> {
    const id: number = Number(route.paramMap.get('id'));

    if (isNaN(id)) {
      const message: string = `Product id was not a number: ${id}`;
      return of({ product: null, error: message });
    }

    return this.productService.getProduct(id).pipe(
      map((product) => ({ product: product })),
      catchError((error) => {
        const message: string = `Retrieval error: ${error}`;
        return of({ product: null, error: message });
      })
    );
  }
}
