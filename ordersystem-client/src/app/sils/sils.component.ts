import { Component, OnInit } from '@angular/core';
import { SilService } from './sil.service';
import { Router } from '@angular/router';
import { Sil } from './sil.interface';

@Component({
  selector: 'app-sils',
  templateUrl: './sils.component.html',
})
export class SilsComponent implements OnInit {
  title = 'Service Information Letters (SILS)';
  sils: any[];
  constructor(private silService: SilService, private router: Router) { }

  ngOnInit() {
    this.silService.getSils()
        .subscribe((data) => this.sils = data);
  };
}


/*;


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
} */