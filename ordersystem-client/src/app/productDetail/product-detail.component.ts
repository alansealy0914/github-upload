import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../products/product.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'product-detail',
    templateUrl: './productDetail.html'
})
export class ProductDetailComponent implements OnInit {
    title = 'Product Detail';
    product: Product;

    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.route.data.subscribe((data: { product: Product }) => {
            this.product = data.product;
        });
    }
}