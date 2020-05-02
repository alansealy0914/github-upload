import { Component, OnInit } from '@angular/core';
import { ProductSilService } from './product-sil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-sils',
  templateUrl: './product-sils.component.html',
  styleUrls: ['./product-sils.component.css']
})
export class ProductSilsComponent implements OnInit {
  title = 'Product Service Information Letter';
  productsils: any[];
  constructor(private productsilService: ProductSilService, private router: Router) { }

  ngOnInit() {
    this.productsilService.getProductsils()
        .subscribe((data) => this.productsils = data);
  };
}
