
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { ProductSil } from '../productsils/product-sil.interface';
import { ProductSilService } from '../productsils/product-sil.service';

@Injectable()
export class ProductsilDetailResolver implements Resolve<ProductSil> {
  constructor(private productsilService: ProductSilService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ProductSil> {
    let id = route.paramMap.get('productsilId');

    return this.productsilService.getProductsil(id).pipe(
      take(1),
      map(productsil => {
        if (productsil) {
          return productsil;
        } else {
          this.router.navigate(['/productsils']);
          return null;
        }
      })
    );
  }
}



/* CHANGE THIS TO POINT TO PRODUCT*/