import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Component({
    selector: 'products',
    templateUrl: './products.html'
})
export class ProductsComponent implements OnInit {
    title = 'Products';
    products: any[];

    constructor(private productService: ProductService, private router: Router) { }

    ngOnInit() {
        this.productService.getProducts()
            .subscribe((data) => this.products = data);
    };

    goToCreateOrder() {
        this.router.navigate(['/orders/create']);
    }
}