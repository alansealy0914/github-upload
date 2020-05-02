import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductSil } from './product-sil.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductSilService {

  constructor(private http: HttpClient) { }

  getProductsils() {
    return this.http.get<any>('/api/productsils');
  }

  getProductsil(id): Observable<ProductSil> {
    return this.http.get<ProductSil>(`/api/productsils/${id}`);
  }

  postProductsil(productsil) {
    return this.http
      .post('/api/productsils', productsil)
      .toPromise()
      .then(response => response);
  }
}